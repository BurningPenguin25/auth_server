'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class callFromServer2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  callFromServer2.init({
    method: DataTypes.STRING,
    status: DataTypes.STRING,
    description: DataTypes.TEXT,
    user: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'callFromServer2',
  });
  return callFromServer2;
};