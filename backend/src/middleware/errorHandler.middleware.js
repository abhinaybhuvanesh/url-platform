const logger = require('../utils/logger');
function errorHandler(err, req, res, next) {
  logger.error(`${req.method} ${req.path} - ${err.message}`);
  res.status(err.statusCode || 500).json({
    error: err.message || 'Something went wrong',
  });
}
module.exports = errorHandler;