const jwt = require('../../utils/jwt');
const { JWT_TOKEN_SOURCE } = require('../../config/config');

exports.authorize = (role = null) =>
    async function (req, res, next) {
        try {
            if (!req.headers.authorization) return response.authorizationError(res);

            const token = req.headers.authorization.split(' ')[1]; // Extracting Bearer token from header.

            if (!token) return response.authorizationError(res);

            const decoded = jwt.verifyAuthToken(token);

            if (decoded && decoded.source === JWT_TOKEN_SOURCE) {

                req.user = decoded;

                next();
            } else {
                return response.authorizationError(res);
            }
        }
        catch (e) {
            throw e
        }
    } 