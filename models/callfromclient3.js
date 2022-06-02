'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class callFromClient3 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  callFromClient3.init({
    method: DataTypes.STRING,
    status: DataTypes.STRING,
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'callFromClient3',
  });
  return callFromClient3;
};