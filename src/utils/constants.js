 const JWT_SECRET = process.env.JWT_SECRET || 'your-secret';
 const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS, 10) || 10;
 const PORT = process.env.PORT || 3000;
 const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/myapp';
 const API_VERSION = process.env.API_VERSION || 'v1';
 const UPLOAD_DIR = process.env.UPLOAD_DIR || 'uploads';
 const LOG_LEVEL = process.env.LOG_LEVEL || 'info';
 const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : ['http://localhost:3000'];
 const MAX_FILE_SIZE = parseInt(process.env.MAX_FILE_SIZE, 10) || 5 * 1024 * 1024; // 5 MB
 const RATE_LIMIT_WINDOW = parseInt(process.env.RATE_LIMIT_WINDOW, 10) || 15 * 60 * 1000; // 15 minutes
 const RATE_LIMIT_MAX_REQUESTS = parseInt(process.env.RATE_LIMIT_MAX_REQUESTS, 10) || 100; // 100 requests per window
 const EMAIL_SERVICE = process.env.EMAIL_SERVICE || 'gmail';
 const EMAIL_USER = process.env.EMAIL_USER || '';
 const EMAIL_PASS = process.env.EMAIL_PASS || '';

module.exports = {
    JWT_SECRET,
    SALT_ROUNDS,
    PORT,
    DB_URL,
    API_VERSION,
    UPLOAD_DIR,
    LOG_LEVEL,
    ALLOWED_ORIGINS,
    MAX_FILE_SIZE,
    RATE_LIMIT_WINDOW,
    RATE_LIMIT_MAX_REQUESTS,
    EMAIL_SERVICE,
    EMAIL_USER,
    EMAIL_PASS
};