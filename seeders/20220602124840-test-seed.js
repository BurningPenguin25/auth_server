'use strict';

const {DATE} = require("sequelize");
module.exports = {
  async up (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('userdata', [{
      id: 2,
      firstName: 'demo@demo.com1',
      middleName:"Тестович1",
      family: "Тестов1",
      city: "Новосибирск1",
      phone: "+711122234571",
      workingPhone: "20022971",
      logotype_link: "http://link.com/user/logotype1",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('userdata', null, {});
  }
};
