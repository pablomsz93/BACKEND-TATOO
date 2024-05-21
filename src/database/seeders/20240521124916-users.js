"use strict";
const bcrypt = require("bcrypt");
const plainPassword = "12345678";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.bulkInsert(
         "users",
         [
            {
               id: 1,
               first_name: "Juan",
               last_name: "Pérez",
               email: "juan.perez@hotmail.com",
               password: bcrypt.hashSync(plainPassword, 10),
               is_active: true,
               role_id: 1,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id: 2,
               first_name: "María",
               last_name: "González",
               email: "maria.gonzalez@hotmail.com",
               password: bcrypt.hashSync(plainPassword, 10),
               is_active: true,
               role_id: 2,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id: 3,
               first_name: "Carlos",
               last_name: "López",
               email: "carlos.lopez@hotmail.com",
               password: bcrypt.hashSync(plainPassword, 10),
               is_active: true,
               role_id: 3,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id: 4,
               first_name: "Ana",
               last_name: "Martínez",
               email: "ana.martinez@hotmail.com",
               password: bcrypt.hashSync(plainPassword, 10),
               is_active: true,
               role_id: 3,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id: 5,
               first_name: "Pedro",
               last_name: "Sánchez",
               email: "pedro.sanchez@hotmail.com",
               password: bcrypt.hashSync(plainPassword, 10),
               is_active: true,
               role_id: 3,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
         ],

         {}
      );
   },

   async down(queryInterface, Sequelize) {
      await queryInterface.bulkDelete("users", null, {});
   },
};
