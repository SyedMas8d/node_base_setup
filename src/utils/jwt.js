// Requirement
const jwt = require('jsonwebtoken');
const { JWT_SECRET, JWT_TOKEN_SOURCE, JWT_EXPIRY } = require('../config/config');

const generateAuthToken = (user) => {
    try {
        const payload = {
            source: JWT_TOKEN_SOURCE,
            ...user
        }

        return jwt.sign(payload, JWT_SECRET, {
            expiresIn: JWT_EXPIRY
        });
    }
    catch (e) {
        throw e;
    }
}

const verifyAuthToken = (token) => {
    try {
        return jwt.verify(token, JWT_SECRET);
    }
    catch (e) {
        throw e;
    }
}

module.exports = {
    generateAuthToken,
    verifyAuthToken
}