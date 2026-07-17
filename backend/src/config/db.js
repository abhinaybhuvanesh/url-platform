// db.js — handles connecting to MongoDB using Mongoose

const mongoose = require('mongoose');

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
    process.exit(1); // stop the app if we can't connect to the DB — no point running without it
  }
}

module.exports = connectDB;