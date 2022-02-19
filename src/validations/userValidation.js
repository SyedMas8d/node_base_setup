const Joi = require('joi');
// const validator = require('validatorjs');

const userSchema = {
    // createUser: Joi.object().keys({
    //     first_name: Joi.string().min(3).max(20).required(),
    //     last_name: Joi.string().empty('').max(20),
    //     email: Joi.string().email({ tlds: { allow: false } }).required(),
    //     password: Joi.string().min(6).max(20).required(),
    //     mobile_no: Joi.string().min(10).max(10).required()
    // })
    createUser: {
        first_name: 'required|min:3|max:20',
        last_name: 'max:20',
        email: 'required|email',
        password: 'required|min:6|max:20',
        mobile_no: 'required|size:10'
    },

    sendOtp: {
        email: 'required|email'
    },

    verifyOtp: {
        email: 'required|email',
        otp: 'required|min:4|max:4'
    },

    login: {
        email: 'required|email',
        password: 'required'
    }
}

module.exports = userSchema