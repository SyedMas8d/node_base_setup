class Response {

    sucess(res, code, message, data = {}) {
        return res.status(code).json({
            status: statusCode.HTTP_OK,
            message: message,
            data: data
        });
    }

    error(res, message, code = null) {
        return res.status(code || statusCode.HTTP_UNPROCESSABLE_ENTITY).json({
            status: code || statusCode.HTTP_UNPROCESSABLE_ENTITY,
            message: message
        });
    }

    requestValidateErroe(res, err) {
        return res.status(statusCode.HTTP_UNPROCESSABLE_ENTITY).json({
            status: statusCode.HTTP_UNPROCESSABLE_ENTITY,
            message: err,
        });
    }

    authorizationError(res, err = null) {
        return res.status(statusCode.HTTP_UNAUTHORIZED).json({
            status: statusCode.HTTP_UNAUTHORIZED,
            message: err || 'Unauthorized'
        });
    }

    serverError(res, err = {}) {
        return res.status(statusCode.HTTP_INTERNAL_SERVER_ERROR).json({
            status: statusCode.HTTP_INTERNAL_SERVER_ERROR,
            message: 'Internal Server Error',
            error: err
        });
    }
}

module.exports = new Response();