const express = require("express");
const router = express.Router();
const control = require("../controllers/servicecontroller");

router.get("/", control.getAll)




module.exports = router;

