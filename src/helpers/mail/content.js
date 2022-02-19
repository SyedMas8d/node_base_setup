const otpHelper = require('../otpHelper');
const { APP_NAME } = require('../../config/config')

module.exports = {
    emailVerification: async (params) => {
        return {
            subject: APP_NAME + " Email Verification",
            context: {
                email: params.email,
                otp: await otpHelper.generateEmailOtp(params.email)
            }
        }
    },
}