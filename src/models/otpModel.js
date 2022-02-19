const Model = require('../table_schemas/index');

class OtpModel {
    async generateOtp(obj, email) {
        const isEmailExist = await Model.Otp.findOne({ where: { email } });

        if (isEmailExist) return Model.Otp.update(obj, { where: { email } });

        return Model.Otp.create(obj);
    }

    async verifyOtp(email, otp) {
        return Model.Otp.findOne({ where: { email, otp } });
    }

    async verifiedEmail(email) {
        return Model.Otp.update({ is_verified: true }, { where: { email } })
    }

    async isEmailVerified(email) {
        return Model.Otp.findOne({
            attributes: ['id', 'email', 'is_verified'],
            where: { email, is_verified: true }
        });
    }
}

module.exports = new OtpModel();