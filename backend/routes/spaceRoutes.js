const express = require("express");
const router = express.Router();
const spacesController = require("../controller/spacesController");

router.post('/create-space',spacesController.create);
router.get('/get-spaces',spacesController.getAllSpaces);
router.get('/get-space/:id',spacesController.getSpace);
router.get('/get-my-space/:id',spacesController.getMySpaces);

module.exports = router;
