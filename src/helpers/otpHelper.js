// Requirements
// Requirements
const { OTP_EXPIRY } = require('../config/config');
const moment = require('moment');

// Model
const otpModel = require('../models/otpModel');

class OtpHelper {

    async generateEmailOtp(email) {
        const otp = Math.floor(1000 + Math.random() * 9000);

        const otp_expiry = moment().add(OTP_EXPIRY, 'minutes').format("Y-M-D hh:mm"); //Expired in 5 mins

        const obj = { email, otp, otp_expiry }

        await otpModel.generateOtp(obj, email);

        return otp;
    }
}

module.exports = new OtpHelper();