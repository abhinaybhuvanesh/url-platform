require('dotenv').config();
const express = require('express');
const cors = require('cors');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const QRCode = require('qrcode');
const connectDB = require('./src/config/db');
const { redisClient, connectRedis } = require('./src/config/redis');
const Url = require('./src/models/Url');
const authRoutes = require('./src/routes/auth.routes');
const protect = require('./src/middleware/auth.middleware');
const rateLimit = require('./src/middleware/rateLimiter.middleware');
const errorHandler = require('./src/middleware/errorHandler.middleware');
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);

connectDB();
connectRedis();

function generateShortCode() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let code = '';
  for (let i = 0; i < 6; i++) code += chars[Math.floor(Math.random() * chars.length)];
  return code;
}

app.post('/api/urls', rateLimit, async (req, res, next) => {
  try {
    const { longUrl, customAlias, password } = req.body;
    if (!longUrl) return res.status(400).json({ error: 'longUrl is required' });
    if (!validator.isURL(longUrl, { require_protocol: true })) {
      return res.status(400).json({ error: 'longUrl must be a valid URL (include http:// or https://)' });
    }
    let ownerId = null;
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      try {
        const decoded = jwt.verify(authHeader.split(' ')[1], process.env.JWT_SECRET);
        ownerId = decoded.userId;
      } catch (err) {}
    }
    let shortCode;
    if (customAlias) {
      if (!/^[a-zA-Z0-9_-]{3,20}$/.test(customAlias)) {
        return res.status(400).json({ error: 'Custom alias must be 3-20 characters (letters, numbers, - or _ only)' });
      }
      const existing = await Url.findOne({ shortCode: customAlias });
      if (existing) return res.status(409).json({ error: 'This alias is already taken' });
      shortCode = customAlias;
    } else {
      shortCode = generateShortCode();
    }
    let hashedPassword = null;
    if (password) hashedPassword = await bcrypt.hash(password, 10);
    const newUrl = await Url.create({ longUrl, shortCode, owner: ownerId, password: hashedPassword });
    res.status(201).json({
      shortCode: newUrl.shortCode,
      shortUrl: `${process.env.BASE_URL || 'http://localhost:3000'}/${newUrl.shortCode}`,
      longUrl: newUrl.longUrl,
      owner: newUrl.owner,
      isPasswordProtected: !!newUrl.password,
    });
  } catch (err) {
    next(err);
  }
});

app.get('/:shortCode', async (req, res, next) => {
  try {
    const { shortCode } = req.params;
    const found = await Url.findOne({ shortCode });
    if (!found) return res.status(404).json({ error: 'Short URL not found' });
    if (found.password) {
      const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3001';
      return res.redirect(`${frontendUrl}/verify/${shortCode}`);
    }
    const cachedUrl = await redisClient.get(shortCode);
    if (cachedUrl) {
      Url.updateOne({ shortCode }, { $inc: { clickCount: 1 } }).exec();
      return res.redirect(cachedUrl);
    }
    await redisClient.setEx(shortCode, 3600, found.longUrl);
    found.clickCount += 1;
    await found.save();
    res.redirect(found.longUrl);
  } catch (err) {
    next(err);
  }
});

app.post('/api/urls/:shortCode/unlock', async (req, res, next) => {
  try {
    const { shortCode } = req.params;
    const { password } = req.body;
    const found = await Url.findOne({ shortCode });
    if (!found) return res.status(404).json({ error: 'Short URL not found' });
    if (!found.password) return res.json({ longUrl: found.longUrl });
    const isMatch = await bcrypt.compare(password || '', found.password);
    if (!isMatch) return res.status(401).json({ error: 'Incorrect password' });
    found.clickCount += 1;
    await found.save();
    res.json({ longUrl: found.longUrl });
  } catch (err) {
    next(err);
  }
});

app.get('/api/urls/:shortCode/qrcode', async (req, res, next) => {
  try {
    const { shortCode } = req.params;
    const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
    const qrDataUrl = await QRCode.toDataURL(`${baseUrl}/${shortCode}`);
    res.json({ qrCode: qrDataUrl });
  } catch (err) {
    next(err);
  }
});

app.get('/api/urls/my-links', protect, async (req, res, next) => {
  try {
    const myUrls = await Url.find({ owner: req.userId }).sort({ createdAt: -1 });
    res.json(myUrls);
  } catch (err) {
    next(err);
  }
});

app.use(errorHandler);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));