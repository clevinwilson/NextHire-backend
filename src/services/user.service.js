const User = require('../models/user.model');

exports.findUserById = (id) => {
    return User.findOne({ where: { id } });
};
