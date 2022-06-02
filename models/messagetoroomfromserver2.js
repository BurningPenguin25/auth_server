'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class messageToRoomFromServer2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  messageToRoomFromServer2.init({
    method: DataTypes.STRING,
    status: DataTypes.STRING,
    room: DataTypes.STRING,
    messageID: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'messageToRoomFromServer2',
  });
  return messageToRoomFromServer2;
};