const express = require("express");
const router = express.Router();
const authRoutes = require("./authrouter");
const userRoutes = require("./usersrouter");
const appointmentRoutes = require("./appointmentrouter")
const servicesRoutes = require("./serviceroutes")



router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/appointments", appointmentRoutes);
router.use("/services",servicesRoutes)



module.exports = router;
