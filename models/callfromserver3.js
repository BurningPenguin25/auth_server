'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class callFromServer3 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  callFromServer3.init({
    method: DataTypes.STRING,
    status: DataTypes.STRING,
    content: DataTypes.STRING,
    user: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'callFromServer3',
  });
  return callFromServer3;
};