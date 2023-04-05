const express = require("express");
const router = express.Router();
const commentController = require("../controller/commentController");

router.post("/createComment", commentController.createComment);
router.post("/getCommentByAuthor", commentController.getCommentsByAuthor);

module.exports = router;
