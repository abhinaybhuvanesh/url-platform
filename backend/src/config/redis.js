const { createClient } = require("redis");

let redisClient = null;

async function connectRedis() {
  if (!process.env.REDIS_URL) {
    console.log("Redis disabled");
    return;
  }

  redisClient = createClient({
    url: process.env.REDIS_URL,
  });

  redisClient.on("error", (err) => {
    console.error("Redis error:", err);
  });

  await redisClient.connect();
  console.log("Redis connected successfully");
}

module.exports = {
  get redisClient() {
    return redisClient;
  },
  connectRedis,
};