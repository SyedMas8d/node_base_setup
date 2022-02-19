'use strict';

const roles = require('../src/config/roles-seeder.json');

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const rolesData = roles.map((data) => {
      return {
        role: data.role,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    });

    return await queryInterface.bulkInsert('Roles', rolesData);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Roles', null, {});
  }
};
