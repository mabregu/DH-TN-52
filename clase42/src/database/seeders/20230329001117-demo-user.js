'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    */
    await queryInterface.bulkInsert('Users', [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'jhon@mail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Maria',
        lastName: 'Doe',
        email: 'maria@mail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Messi',
        lastName: 'Doe',
        email: 'messi@mail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Rocio',
        lastName: 'Doe',
        email: 'rocio@mail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
