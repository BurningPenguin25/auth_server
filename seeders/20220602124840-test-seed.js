'use strict';

const {DATE} = require("sequelize");
module.exports = {
  async up (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('userdata', [{
      email: 'mail@mail.comа',
      firstName: 'demo@demo.comи',
      middleName:"Тестовичу",
      family: "Тестовп",
      city: "Новосибирскк",
      phone: "+711122234571",
      workingPhone: "20022971",
      logotype_link: "http://link.com/user/logotypeу",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('userdata', null, {});
  }
};
