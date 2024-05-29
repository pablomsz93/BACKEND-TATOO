const express = require("express");
const router = express.Router();
const control = require("../controllers/authcontroller");

router.post("/register", control.register);


module.exports = router;
