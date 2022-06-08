'use strict';

module.exports = {

  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('Authorizations', {
      fields: ['userID'],
      type: "foreign key",
      name: 'FullTable',
      references: {
        table: 'userdata',
        field: 'id',
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('Authorizations', {
      fields: ['userID'],
      type: "foreign key",
      name: 'FullTable',
      references: {
        table: 'userdata',
        field: 'id',
      }
    })
  }

};
