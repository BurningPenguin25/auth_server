'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class subscribtionFromServer2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  subscribtionFromServer2.init({
    method: DataTypes.STRING,
    status: DataTypes.STRING,
    targetUser: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'subscribtionFromServer2',
  });
  return subscribtionFromServer2;
};