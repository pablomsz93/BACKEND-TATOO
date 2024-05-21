'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('appointments', [
      {
        appointment_date: new Date('2024-05-25T10:00:00'),
        user_id: 1, 
        service_id: 1, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        appointment_date: new Date('2024-05-27T14:30:00'),
        user_id: 2, 
        service_id: 2, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        appointment_date: new Date('2024-06-02T11:15:00'),
        user_id: 3, 
        service_id: 3, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        appointment_date: new Date('2024-06-05T09:45:00'),
        user_id: 4, 
        service_id: 4, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        appointment_date: new Date('2024-06-08T13:00:00'),
        user_id: 5, 
        service_id: 5, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('appointments', null, {});
  }
};
