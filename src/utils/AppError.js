class AppError extends Error {
    constructor(message, statusCode = 400, errorCode = 'BAD_REQUEST', errorType = 'Operational') {
        super(message);
        this.statusCode = statusCode;
        this.errorCode = errorCode;
        this.errorType = errorType;
        this.isOperational = true; // can be used to separate logic bugs from expected errors
    }
}

module.exports = AppError;
