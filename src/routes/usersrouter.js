const express = require("express");
const router = express.Router();
const control = require("../controllers/userscontrollers");
const auth = require("../middlewares/auth");
const authorize = require("../middlewares/authorize");



router.get("/",auth,authorize("super-admin"), control.getAll);
router.get("/profile", auth, control.getUserProfile);
router.put("/profile",auth,control.updateUserProfile)
router.delete("/:id", auth,authorize("super-admin"),  control.delete);


module.exports = router;
