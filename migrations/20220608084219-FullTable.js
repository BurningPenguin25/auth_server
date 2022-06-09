'use strict';

module.exports = {

  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('userdata', {
      fields: ['authID'],
      type: "foreign key",
      name: 'FullTable',
      references: {
        table: 'Authorizations',
        field: 'id',
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await  queryInterface.removeConstraint('userdata', {
      fields: ['authID'],
      type: "foreign key",
      name: 'FullTable',
      references: {
        table: 'Authorizations',
        field: 'id',
      }
    })
  }

};
