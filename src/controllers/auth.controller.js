const { createUser } = require('../services/auth.service');

exports.register = async (req, res, next) => {
    try {
        const { user, token } = await createUser(req.body);
        if (!user || !token) {
            return res.status(400).json({ message: 'Error creating user or generating token' });
        }
        res.status(201).json({
            message: 'User registered successfully',
            user: {
                id: user.id,
                email: user.email
            },
            token
        });
    } catch (error) {
        next(error);
    }
};
