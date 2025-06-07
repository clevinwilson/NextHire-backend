const bcrypt = require('bcrypt');

const hashPassword = (plain) => bcrypt.hashSync(plain, 10);
const verifyPassword = (plain, hash) => bcrypt.compareSync(plain, hash);

module.exports = {
    hashPassword,
    verifyPassword
};
