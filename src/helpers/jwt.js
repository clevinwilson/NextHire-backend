const jwt = require('jsonwebtoken');
const { JWT_SECRET, JWT_EXPIRATION } = require('../utils/constants');

const generateToken = (payload) => jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRATION });

const verifyToken = (token) => jwt.verify(token, JWT_SECRET);

module.exports = {
    generateToken,
    verifyToken
};
