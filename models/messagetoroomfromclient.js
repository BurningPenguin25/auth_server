'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class messageToRoomFromClient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  messageToRoomFromClient.init({
    method: DataTypes.STRING,
    room: DataTypes.STRING,
    content: DataTypes.STRING,
    type: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'messageToRoomFromClient',
  });
  return messageToRoomFromClient;
};