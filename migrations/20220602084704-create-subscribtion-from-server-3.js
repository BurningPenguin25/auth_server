'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('subscribtionFromServer3s', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      method: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      targetUser: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('subscribtionFromServer3s');
  }
};