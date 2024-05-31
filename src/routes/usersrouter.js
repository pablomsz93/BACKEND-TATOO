const express = require("express");
const router = express.Router();
const control = require("../controllers/userscontrollers");
const auth = require("../middlewares/auth");
const authorize = require("../middlewares/authorize");



router.get("/", control.getAll);
router.get("/profile", auth, control.getUserProfile);




module.exports = router;
