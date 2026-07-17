// redis.js — sets up a connection to our local Redis server

const { createClient } = require('redis');

const redisClient = createClient(); // defaults to localhost:6379, Redis's standard port

redisClient.on('error', (err) => console.error('Redis error:', err));

async function connectRedis() {
  await redisClient.connect();
  console.log('Redis connected successfully');
}

module.exports = { redisClient, connectRedis };