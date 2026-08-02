const express = require('express');
const cors = require('cors');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const QRCode = require('qrcode');

const connectDB = require('./src/config/db');

const Url = require('./src/models/Url');
const authRoutes = require('./src/routes/auth.routes');
const protect = require('./src/middleware/auth.middleware');
const errorHandler = require('./src/middleware/errorHandler.middleware');

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL || true,
    credentials: true,
  })
);
app.get("/api/health", async (req, res) => {
  res.json({
    ok: true,
    mongo: !!process.env.MONGODB_URI,
    jwt: !!process.env.JWT_SECRET,
    base: process.env.BASE_URL || null
  });
});


app.use(express.json());
app.use(async (req, res, next) => {
  try {
    await connectDB();

    next();
  } catch (error) {
  console.error(error);

  return res.status(500).json({
    error: error.message,
    stack: error.stack,
  });
  }
});

app.get('/', (req, res) => {
  res.json({
    message: 'SwiftByte API is running',
  });
});

app.use('/api/auth', authRoutes);

function generateShortCode() {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  let code = '';

  for (let i = 0; i < 6; i++) {
    code += characters[Math.floor(Math.random() * characters.length)];
  }

  return code;
}

app.post('/api/urls', async (req, res, next) => {
  try {
    const { longUrl, customAlias, password } = req.body;

    if (!longUrl) {
      return res.status(400).json({
        error: 'longUrl is required',
      });
    }

    if (!validator.isURL(longUrl, { require_protocol: true })) {
      return res.status(400).json({
        error:
          'longUrl must be a valid URL and include http:// or https://',
      });
    }

    let ownerId = null;

    const authHeader = req.headers.authorization;

    if (authHeader?.startsWith('Bearer ')) {
      try {
        const token = authHeader.split(' ')[1];

        const decoded = jwt.verify(
          token,
          process.env.JWT_SECRET
        );

        ownerId = decoded.userId;
      } catch (error) {
      }
    }

    let shortCode;

    if (customAlias) {
      if (!/^[a-zA-Z0-9_-]{3,20}$/.test(customAlias)) {
        return res.status(400).json({
          error:
            'Custom alias must contain 3-20 letters, numbers, hyphens or underscores',
        });
      }

      const existingUrl = await Url.findOne({
        shortCode: customAlias,
      });

      if (existingUrl) {
        return res.status(409).json({
          error: 'This alias is already taken',
        });
      }

      shortCode = customAlias;
    } else {
      do {
        shortCode = generateShortCode();
      } while (await Url.exists({ shortCode }));
    }

    let hashedPassword = null;

    if (password) {
      hashedPassword = await bcrypt.hash(password, 10);
    }

    const newUrl = await Url.create({
      longUrl,
      shortCode,
      owner: ownerId,
      password: hashedPassword,
    });

    const baseUrl =
      process.env.BASE_URL || 'http://localhost:3000';

    res.status(201).json({
      shortCode: newUrl.shortCode,
      shortUrl: `${baseUrl}/${newUrl.shortCode}`,
      longUrl: newUrl.longUrl,
      owner: newUrl.owner,
      isPasswordProtected: Boolean(newUrl.password),
    });
  } catch (error) {
    next(error);
  }
});

app.get('/api/urls/:shortCode/qrcode', async (req, res, next) => {
  try {
    const { shortCode } = req.params;

    const baseUrl =
      process.env.BASE_URL || 'http://localhost:3000';

    const qrCode = await QRCode.toDataURL(
      `${baseUrl}/${shortCode}`
    );

    res.json({ qrCode });
  } catch (error) {
    next(error);
  }
});

app.post(
  '/api/urls/:shortCode/unlock',
  async (req, res, next) => {
    try {
      const { shortCode } = req.params;
      const { password } = req.body;

      const foundUrl = await Url.findOne({ shortCode });

      if (!foundUrl) {
        return res.status(404).json({
          error: 'Short URL not found',
        });
      }

      if (!foundUrl.password) {
        return res.json({
          longUrl: foundUrl.longUrl,
        });
      }

      const isCorrectPassword = await bcrypt.compare(
        password || '',
        foundUrl.password
      );

      if (!isCorrectPassword) {
        return res.status(401).json({
          error: 'Incorrect password',
        });
      }

      foundUrl.clickCount += 1;
      await foundUrl.save();

      res.json({
        longUrl: foundUrl.longUrl,
      });
    } catch (error) {
      next(error);
    }
  }
);

app.get('/api/urls/my-links', protect, async (req, res, next) => {
  try {
    const urls = await Url.find({
      owner: req.userId,
    }).sort({
      createdAt: -1,
    });

    res.json(urls);
  } catch (error) {
    next(error);
  }
});

app.get('/:shortCode', async (req, res, next) => {
  try {
    const { shortCode } = req.params;

    const foundUrl = await Url.findOne({ shortCode });

    if (!foundUrl) {
      return res.status(404).json({
        error: 'Short URL not found',
      });
    }

    if (foundUrl.password) {
      const frontendUrl =
        process.env.FRONTEND_URL ||
        'http://localhost:3001';

      return res.redirect(
        `${frontendUrl}/verify/${shortCode}`
      );
    }
    
    foundUrl.clickCount += 1;
    await foundUrl.save();

    res.redirect(foundUrl.longUrl);
  } catch (error) {
    next(error);
  }
});

app.use(errorHandler);

if (!process.env.VERCEL) {
  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;