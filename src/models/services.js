'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    
    static associate(models) {
      Service.hasMany(models.Appointment,{
        as:"appointments",
        foreignKey:"service_id",
      })
    }
  }
  Service.init({
    service_name: DataTypes.STRING,
    description:DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Service',
    tableName:"services"
  });
  return Service;
};