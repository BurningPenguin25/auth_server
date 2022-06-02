'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class subscribtionFromServer3 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  subscribtionFromServer3.init({
    method: DataTypes.STRING,
    status: DataTypes.STRING,
    targetUser: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'subscribtionFromServer3',
  });
  return subscribtionFromServer3;
};