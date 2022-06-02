'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class subscribtionFromServer1 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  subscribtionFromServer1.init({
    method: DataTypes.STRING,
    status: DataTypes.STRING,
    targetUser: DataTypes.STRING,
    roomID: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'subscribtionFromServer1',
  });
  return subscribtionFromServer1;
};