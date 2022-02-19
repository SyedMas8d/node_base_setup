const bcrypt = require('bcrypt');
const { BCRYPT_SALT } = require('../config/config');

const hashPassword = (password) => {
    return bcrypt.hash(password, Number(BCRYPT_SALT));
}

const comparePassword = (password, encrypted) => {
    return bcrypt.compare(password, encrypted);
}

module.exports = {
    hashPassword,
    comparePassword
}