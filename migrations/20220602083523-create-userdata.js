'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('userdata', {
      id: {
        unique: true,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      middleName: {
        type: Sequelize.STRING
      },
      family: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      workingPhone: {
        type: Sequelize.STRING
      },
      logotype_link: {
        type: Sequelize.STRING
      },
      userID :{
        type: Sequelize.INTEGER,
        foreignKey: true
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
    await queryInterface.dropTable('userdata');
  }
};