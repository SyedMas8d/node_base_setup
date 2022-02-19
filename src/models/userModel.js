const Model = require('../table_schemas/index');

class UserModel {
    createUser(obj) {
        return Model.User.create(obj);
    }

    isEmailExist(email) {
        return Model.User.findOne({ where: { email } });
    }

    isPhoneNumberExist(mobile_no) {
        return Model.User.findOne({ where: { mobile_no } });
    }
}

module.exports = new UserModel();