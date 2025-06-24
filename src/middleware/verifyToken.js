const jwt = require('jsonwebtoken');
const { findUserById } = require('../services/user.service');
const { JWT_SECRET } = require('../utils/constants');

const verifyToken = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, message: 'Access denied: No token provided' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        const userId = decoded.id;
        if (!userId) {
            return res.status(401).json({ success: false, message: 'Invalid token payload' });
        }

        const user = await findUserById(userId);

        if (!user) {
            return res.status(401).json({ success: false, message: 'User not found or inactive' });
        }

        req.user = user;
        next();
    } catch (err) {
        return res.status(401).json({ success: false, message: 'Invalid or expired token' });
    }
};

module.exports = verifyToken;
