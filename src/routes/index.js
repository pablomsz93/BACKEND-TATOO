const express = require("express");
const router = express.Router();
const authRoutes = require("./authrouter");
const userRoutes = require("./usersrouter")


router.use("/auth", authRoutes);
router.use("/users", userRoutes);



module.exports = router;
