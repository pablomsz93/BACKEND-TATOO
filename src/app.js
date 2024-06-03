const express = require("express");
const dotenv = require("dotenv");
const sequelize = require("./database/db");
const apiRoutes = require("./routes");

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 4000;

app.use("/api", apiRoutes);




app.put("/api/appointments", (req, res) => {
  res.status(200).json({
    sucess: true,
    message: "Cita actualizada",
  });
});

app.get("/api/appointments/:id", (req, res) => {
  res.status(200).json({
    sucess: true,
    message: "Cita recuperada",
  });
});

app.get("/api/appointments", (req, res) => {
  res.status(200).json({
    sucess: true,
    message: "ver mis citas",
  });
});

app.get("/api/services", (req, res) => {
  res.status(200).json({
    sucess: true,
    message: "ver todos los servicios",
  });
});

app.post("/api/services", (req, res) => {
  res.status(201).json({
    sucess: true,
    message: "Servicio creado",
  });
});

app.put("/api/services/:id", (req, res) => {
  res.status(200).json({
    sucess: true,
    message: "Servicio modificado",
  });
});

app.delete("/api/services/:id", (req, res) => {
  res.status(200).json({
    sucess: true,
    message: "Servicio eliminado",
  });
});

sequelize
  .authenticate()
  .then(() => {
    console.log("🛢️  Base de datos verificada");

    app.listen(PORT, () => {
      console.log(`🚀 Server listening on port: ${PORT}`);
    });
  })
  .catch(() => {
    console.error("Error verificacion de Base de datos");
  });
