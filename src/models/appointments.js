"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    static associate(models) {
      Appointment.belongsTo(models.User, {
        as: "users",
        foreignKey: "user_id",
      });
      Appointment.belongsTo(models.Service, {
        as: "services",
        foreignKey: "service_id",
      });
    }
  }
  Appointment.init(
    {
      appointment_date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Appointment",
      tableName: "appointments",
    }
  );
  return Appointment;
};
