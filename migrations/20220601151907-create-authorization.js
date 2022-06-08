'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Authorizations', {
      id: {
        unique: true,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      login: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      authID: {
        allowNull: false,
        type: Sequelize.INTEGER,
        foreignKey: true,
        autoIncrement: true,
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
    await queryInterface.dropTable('Authorizations');
  }
};