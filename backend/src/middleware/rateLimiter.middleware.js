const { RateLimiterRedis } = require('rate-limiter-flexible');
const { redisClient } = require('../config/redis');
const rateLimiter = new RateLimiterRedis({
  storeClient: redisClient,
  useRedisPackage: true,
  keyPrefix: 'rateLimit',
  points: 10,
  duration: 60,
});
async function rateLimit(req, res, next) {
  try {
    await rateLimiter.consume(req.ip);
    next();
  } catch (err) {
    console.error('Rate limiter error:', err);
    res.status(429).json({ error: 'Too many requests, please try again later' });
  }
}
module.exports = rateLimit;