const express = require("express");
const router = express.Router();
const control = require("../controllers/appointmentcontroller");

router.post("/", control.create)
router.put("/", control.update)
router.get("/:id", control.getById)
router.get("/", control.getAll)








module.exports = router;
