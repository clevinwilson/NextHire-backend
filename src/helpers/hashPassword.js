const bcrypt = require('bcrypt');

const hashPassword = (plain) => bcrypt.hashSync(plain, 10);
const comparePassword = (plain, hash) => bcrypt.compareSync(plain, hash);

module.exports = {
    hashPassword,
    comparePassword
};
