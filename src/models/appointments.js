'use strict';
const {
  Model
} = require('sequelize');
const users = require('./users');
const { FOREIGNKEYS } = require('sequelize/lib/query-types');
module.exports = (sequelize, DataTypes) => {
  class appointments extends Model {
    
    static associate(models) {
      appointments.belongsTo(models.users,{
        as: "users",
        foreignKey: "user_id",

      });
      appointments.belongsTo(model.services,{
        as:"services",
        foreignKey:"service_id",
      })
    }
  }
  appointments.init({
    appointment_date:DataTypes.DATE,
    

  }, {
    sequelize,
    modelName: 'appointments',
  });
  return appointments;
};