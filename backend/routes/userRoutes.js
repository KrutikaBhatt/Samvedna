const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const userController = require("../controller/userController");

router.post("/addReward", userController.addReward);
router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.post("/verifyToken", userController.verifyToken);
router.get("/currentUser", auth, userController.currentUser);
router.get("/logout", auth, userController.logout);
router.post("/getRewards", userController.getReward);
router.post("/deleteReward", userController.deleteReward);

module.exports = router;
