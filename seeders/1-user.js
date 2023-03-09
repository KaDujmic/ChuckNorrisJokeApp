'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('user', [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        password: '$2a$12$uvZgtrfGsWx5ZP6z7cbz4.GPP.pOLGe9zJ/tCqinBSLz58QxnVtRC',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
  }
};
