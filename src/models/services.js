'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class services extends Model {
    
    static associate(models) {
      services.hasMany(models.appointments,{
        as:"appointments",
        foreignKey:"service_id",
      })
    }
  }
  services.init({
    service_name: DataTypes.STRING,
    description:DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'services',
  });
  return services;
};