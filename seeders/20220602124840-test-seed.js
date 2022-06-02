'use strict';

const {DATE} = require("sequelize");
module.exports = {
  async up (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('userdata', [{
      id: 1,
      login: 'John',
      firstName: 'demo@demo.com',
      middleName:"Тестович",
      family: "Тестов",
      city: "Новосибирск",
      phone: "+71112223457",
      wodkingPhone: "2002297",
      logotype_link: "http://link.com/user/logotype",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('userdata', null, {});
  }
};
