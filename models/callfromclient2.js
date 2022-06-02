'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class callFromClient2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  callFromClient2.init({
    method: DataTypes.STRING,
    status: DataTypes.BIGINT,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'callFromClient2',
  });
  return callFromClient2;
};