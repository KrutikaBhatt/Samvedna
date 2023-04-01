const express = require("express");
const router = express.Router();
const commentController = require("../controller/commentController");

router.post('/createComment',commentController.createComment);

module.exports = router;
