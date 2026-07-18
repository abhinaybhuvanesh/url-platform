const { createClient } = require('redis');
const redisClient = createClient(); 
redisClient.on('error', (err) => console.error('Redis error:', err));
async function connectRedis() {
  await redisClient.connect();
  console.log('Redis connected successfully');
}
module.exports = { redisClient, connectRedis };