const express = require("express");
const router = express.Router();
const control = require("../controllers/appointmentcontroller");

router.post("/", control.create)
router.put("/", control.update)






module.exports = router;
