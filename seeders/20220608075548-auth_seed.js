'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Authorizations', [{
      login: 'mail@mail.comв',
      password: '12345678901',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Authorizations', null, {});
  }
};
