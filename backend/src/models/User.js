// User.js — defines what a "user" document looks like in MongoDB

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // no two users can register with the same email
  },
  password: {
    type: String,
    required: true, // this will store the HASHED password, never plain text
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('User', userSchema);