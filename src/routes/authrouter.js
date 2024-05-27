const express = require("express");
const router = express.Router();
const control = require("../controllers/authenticationController");

router.post("/register", control.register);


module.exports = router;
