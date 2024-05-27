'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    
    static associate(models) {
      User.belongsTo(models.Role,{
        as:"roles",
        foreignKey:"role_id"
      });
      User.hasMany(models.Appointment,{
        as:"appointments",
        foreignKey: "user_id",
      })
    }
  }
  User.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email:DataTypes.STRING,
    password:DataTypes.STRING,
    is_active:DataTypes.BOOLEAN,
    role_id:DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'User',
    tableName: "users",
    
  });
  return User;
};