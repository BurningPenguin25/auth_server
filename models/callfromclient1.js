'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class callFromClient1 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  callFromClient1.init({
    method: DataTypes.STRING,
    room: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'callFromClient1',
  });
  return callFromClient1;
};