'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        type: Sequelize.STRING(255),
        allowNull:false,
      },
      last_name: {
        type: Sequelize.STRING(255),
        allowNull:false,
      },
      email:{
        type: Sequelize.STRING(255),
        allowNull:false,
        unique:true,
      },
      password_hash:{
        type: Sequelize.STRING(255),
        allowNull:false,
      },
      role_id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:"roles",
          key:"id",
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};