'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Authorization extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
Authorization.belongsTo(models.userdata, {
  as: 'userdata',
  foreignKey: 'userID'
})
    }
  }
  Authorization.init({
    login: DataTypes.STRING,
    password: DataTypes.STRING,
    authID: DataTypes.INTENGER
  }, {
    sequelize,
    modelName: 'Authorization',
  });
  return Authorization;
};