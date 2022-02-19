const logger = require('../../utils/logger')
const response = require('../../utils/response');

function errorHandler(err, req, res, next) {

    logger.error({
        message: err.message || null,
        stack: err.stack || null,
    });
    return response.serverError(res, err.stack || null);
}

module.exports = errorHandler;