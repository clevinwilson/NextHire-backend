const { hashPassword } = require('../helpers/hashPassword');
const { generateToken } = require('../helpers/jwt');
const User = require('../models/user.model');
const AppError = require('../utils/AppError');

exports.createUser = async (userData) => {
    const { email, password } = userData;
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
        throw new AppError('User already exists', 409, 'USER_EXISTS');
    }

    const hashedPassword = hashPassword(password);
    if (!hashedPassword) {
        throw new AppError('Failed to hash password', 500, 'HASHING_ERROR');
    }
    const newUser = await User.create({
        email,
        password: hashedPassword
    });

    // Optionally generate a token immediately after signup
    const token = generateToken({ id: newUser.id, email: newUser.email, userType: newUser.user_type });

    return { user: newUser, token };
};

exports.findUserByEmail = (email) => {
    return User.findOne({ where: { email } });
};
