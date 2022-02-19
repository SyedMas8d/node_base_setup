const express = require('express');
const router = express.Router();

const userController = require('../../controllers/userController');
const userSchema = require('../../validations/userValidation');
const validate = require('../../middlewares/validator/validate');

// Auth
router.post('/', validate(userSchema.createUser), userController.register);
router.post('/send/otp', validate(userSchema.sendOtp), userController.sendEmailOtp);
router.put('/verify/otp', validate(userSchema.verifyOtp), userController.verifyOtp);
router.post('/login', validate(userSchema.login), userController.login);

module.exports = router;