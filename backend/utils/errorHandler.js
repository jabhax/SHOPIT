// Error Handler Class

class ErrorHandler extends Error {

  // ErrorHandler Constructor
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }

}

module.exports = ErrorHandler;
