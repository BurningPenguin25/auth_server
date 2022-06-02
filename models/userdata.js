'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userdata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  userdata.init({
    login: DataTypes.STRING,
    password: DataTypes.STRING,
    firstName: DataTypes.STRING,
    middleName: DataTypes.STRING,
    family: DataTypes.STRING,
    city: DataTypes.STRING,
    phone: DataTypes.STRING,
    wodkingPhone: DataTypes.STRING,
    logotype_link: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'userdata',
  });
  return userdata;
};