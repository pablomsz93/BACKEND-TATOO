const express = require("express");
const router = express.Router();
const control = require("../controllers/appointmentcontroller");
const auth = require("../middlewares/auth");

router.post("/",auth, control.create)
router.put("/:id",auth, control.update)
router.get("/:id",auth, control.getById)
router.get("/",auth, control.getAll)








module.exports = router;
