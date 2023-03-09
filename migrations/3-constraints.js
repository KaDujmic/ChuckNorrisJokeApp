'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('user', {
      fields: ['role_id'],
      onDelete: 'cascade',
      onUpdate: 'cascade',
      type: 'foreign key',
      references: {
        table: 'role',
        field: 'id'
      }
    });
  },

  async down (queryInterface, Sequelize) {}
};
