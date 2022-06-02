'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class callFromServer1 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  callFromServer1.init({
    method: DataTypes.STRING,
    status: DataTypes.STRING,
    room: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'callFromServer1',
  });
  return callFromServer1;
};