const express = require("express");
const router = express.Router();
const spacesController = require("../controller/spacesController");

router.post('/create-space',spacesController.create);
router.get('/get-spaces',spacesController.getAllSpaces);
router.get('/get-space/:id',spacesController.getSpace);

module.exports = router;
