const { createUser, doLogin, findUserByEmail } = require('../services/auth.service');

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

exports.login = async (req, res, next) => {
    try {
        const { user, token } = await doLogin(req.body);
        if (!user || !token) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        res.status(200).json({
            message: 'User logged in successfully',
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

exports.checkEmailExists = async (req, res, next) => {
    try {
        const { email } = req.query;
        if (!email) {
            return res.status(400).json({ message: 'Email query parameter is required' });
        }

        const emailExists = await findUserByEmail(email);
        if (emailExists === null) {
            return res.status(200).json({ message: 'Email not exist', exists: false });
        }

        res.status(200).json({
            message: 'Email exists',
            exists: true
        });
    } catch (error) {
        next(error);
    }
};
