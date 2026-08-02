const mongoose = require("mongoose");

let isConnected = false;

async function connectDB() {
  if (isConnected) return;

  if (!process.env.MONGO_URI) {
  throw new Error("MONGO_URI is missing");
}

await mongoose.connect(process.env.MONGODB_URI);

  isConnected = true;
  console.log("MongoDB Connected");
}

module.exports = connectDB;