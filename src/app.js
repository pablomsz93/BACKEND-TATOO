const express = require("express");
const dotenv = require("dotenv");
const sequelize = require("./database/db");
const apiRoutes = require("./routes");

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 4000;

app.use("/api", apiRoutes);





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
