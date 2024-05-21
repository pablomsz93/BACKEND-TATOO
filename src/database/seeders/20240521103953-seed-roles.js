'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "roles",
      [
        {
          id: 1,
          name: "user",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: "admin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: "super-admin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
   
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("roles", null, {});
  
  }
};
