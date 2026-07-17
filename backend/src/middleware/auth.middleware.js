// auth.middleware.js — checks if a request has a valid JWT token

const jwt = require('jsonwebtoken');

function protect(req, res, next) {
  // tokens are sent in the header like: Authorization: Bearer <token>
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No token provided' });
  }

  const token = authHeader.split(' ')[1]; // grabs just the token part, after "Bearer "

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // throws if invalid/expired
    req.userId = decoded.userId; // attach the user's id to the request for later use
    next(); // token is valid — let the request continue to the actual route handler
  } catch (err) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
}

module.exports = protect;