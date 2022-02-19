'use strict';

const { hashPassword } = require('../helpers/passwordHelper');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    mobile_no: DataTypes.STRING,
    max_store_count: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
    paranoid: true,
    hooks: {
      beforeCreate: async (user) => {
        user.password = await hashPassword(user.password);
      }
    }
  });
  return User;
};