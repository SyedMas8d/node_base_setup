// Model
const UserModel = require('../models/userModel');
const OtpModel = require('../models/otpModel');

//  Service
const { sendEmail } = require('../helpers/mail/mailHelper');
const { generateAuthToken } = require('../utils/jwt');
const { comparePassword } = require('../helpers/passwordHelper');

// Requirements
const moment = require('moment');

class UserService {

    async sendEmailOtp(body) {
        try {
            const { email } = body;

            sendEmail('emailVerification', email, body);

            return { error: false }
        }
        catch (e) {
            throw e;
        }
    }

    async verifyOtp(body) {
        try {
            const { email, otp } = body;

            const verified = await OtpModel.verifyOtp(email, otp);

            if (!verified) return { error: true, message: 'Invalid otp' }

            if (verified.otp_expiry < moment().format("Y-M-D hh:mm")) return { error: true, message: 'Otp expired' }

            OtpModel.verifiedEmail(email);

            return { error: false }
        }
        catch (e) {
            throw e;
        }
    }

    async register(body) {
        try {
            const { first_name, last_name, email, password, mobile_no } = body;

            const [isEmailExist, isPhoneNumberExist] = await Promise.all([
                UserModel.isEmailExist(email),
                UserModel.isPhoneNumberExist(mobile_no)
            ]);

            if (isEmailExist) return { error: true, message: 'Email Already Exist' }

            if (isPhoneNumberExist) return { error: true, message: 'Phone number Already Exist' }

            const emailVerified = await OtpModel.isEmailVerified(email);

            if (!emailVerified) return { error: true, message: 'Email not verified' }

            const obj = { first_name, last_name, email, password, mobile_no, role_id: 1 }

            const result = await UserModel.createUser(obj);

            const data = { id: result.id, first_name, last_name, email, mobile_no }

            data.access_token = generateAuthToken(data);

            return { error: false, data }
        }
        catch (e) {
            throw e
        }
    }

    async login(body) {
        try {
            const { email, password } = body;

            const user = await UserModel.isEmailExist(email);

            if (!user) return { error: true, message: 'User not found' }

            if (!await comparePassword(password, user.password)) return { error: true, message: 'Invalid credentials', code: statusCode.HTTP_UNAUTHORIZED }

            const data = {
                id: user.id,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                mobile_no: user.mobile_no
            }

            data.access_token = generateAuthToken(data);

            return { error: false, data }
        }
        catch (e) {
            throw e
        }
    }
}

module.exports = new UserService();