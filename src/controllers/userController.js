const userService = require('../services/userService');

class UserController {

    async sendEmailOtp(req, res, next) {
        try {
            const result = await userService.sendEmailOtp(req.body);

            if (result.error) return response.error(res, result.message);

            return response.sucess(res, statusCode.HTTP_OK, "Otp sent successfully");
        }
        catch (e) {
            next(e);
        }
    }

    async verifyOtp(req, res, next) {
        try {
            const result = await userService.verifyOtp(req.body);

            if (result.error) return response.error(res, result.message);

            return response.sucess(res, statusCode.HTTP_OK, "Otp verified successfully");
        }
        catch (e) {
            next(e);
        }
    }

    async register(req, res, next) {
        try {
            const result = await userService.register(req.body);

            if (result.error) return response.error(res, result.message);

            return response.sucess(res, statusCode.HTTP_OK, "User registered sent successfully", result.data);
        }
        catch (e) {
            next(e);
        }
    }

    async login(req, res, next) {
        try {
            const result = await userService.login(req.body);

            if (result.error) return response.error(res, result.message, result.code || null);

            return response.sucess(res, statusCode.HTTP_OK, "User login successfully", result.data);
        }
        catch (e) {
            next(e);
        }
    }
}

module.exports = new UserController();