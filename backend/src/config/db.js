const mongoose = require('mongoose');

let connectionPromise = null;

async function connectDB() {
  if (mongoose.connection.readyState === 1) {
    return;
  }

  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI is missing');
  }

  if (!connectionPromise) {
    connectionPromise = mongoose.connect(
      process.env.MONGO_URI
    );
  }

  await connectionPromise;
}

module.exports = connectDB;