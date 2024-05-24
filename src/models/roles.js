'use strict';
const {
  Model
} = require('sequelize');
const users = require('./users');
module.exports = (sequelize, DataTypes) => {
  class roles extends Model {
    
    static associate(models) {
      roles.hasMany(models.users,{
        as: users,
        foreignKey:"role_id"
        
      })
    }
  }
  roles.init({
    name: DataTypes.STRING,
    
  }, {
    sequelize,
    modelName: 'roles',
  });
  return roles;
};