'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    
    static associate(models) {
      users.belongsTo(models.roles,{
        as:"roles",
        foreignKey:"role_id"
      });
      users.hasMany(models.appointments,{
        as:"appointments",
        foreignKey: "user_id",
      })
    }
  }
  users.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email:DataTypes.STRING,
    password:DataTypes.STRING,
    is_active:DataTypes.BOOLEAN,
    role_id:DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};