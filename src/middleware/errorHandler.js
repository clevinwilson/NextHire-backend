const errorHandler = (err, req, res, next) => {
    console.error('Error:', {
        message: err.message,
        statusCode: err.statusCode,
        errorCode: err.errorCode,
        stack: err.stack
    });

    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    res.status(statusCode).json({
        status: false,
        message
    });
};

module.exports = errorHandler;
