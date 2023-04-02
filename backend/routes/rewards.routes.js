const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const rewardController = require("../controller/rewards.controller");

router.get("/getReward", rewardController.getRewardsByName);

module.exports = router;
