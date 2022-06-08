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
      userdata.hasOne(models.authorization,{
        as: 'authorization',
        foreignKey: 'authID'
      });
    }
  }
  userdata.init({
    email: DataTypes.STRING,
    firstName: DataTypes.STRING,
    middleName: DataTypes.STRING,
    family: DataTypes.STRING,
    city: DataTypes.STRING,
    phone: DataTypes.STRING,
    wodkingPhone: DataTypes.STRING,
    logotype_link: DataTypes.STRING,
    userID: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'userdata',
  });
  return userdata;
};