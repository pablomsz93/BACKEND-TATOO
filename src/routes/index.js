const express = require("express");
const router = express.Router();
const authRoutes = require("./authrouter");


router.use("/auth", authRoutes);


module.exports = router;
