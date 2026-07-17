// rateLimiter.middleware.js — limits how many requests one IP can make

const { RateLimiterRedis } = require('rate-limiter-flexible');
const { redisClient } = require('../config/redis');

const rateLimiter = new RateLimiterRedis({
  storeClient: redisClient,
  useRedisPackage: true, // tells the library we're using the modern `redis` npm package (v4+)
  keyPrefix: 'rateLimit',
  points: 10,
  duration: 60,
});

async function rateLimit(req, res, next) {
  try {
    await rateLimiter.consume(req.ip); // deducts 1 "point" from this IP's allowance
    next(); // still has points left — allow the request through
  } catch (err) {
    console.error('Rate limiter error:', err); // ← delete this line now
    res.status(429).json({ error: 'Too many requests, please try again later' });
  }
}

module.exports = rateLimit;