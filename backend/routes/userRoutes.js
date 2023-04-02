const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const userController=require("../controller/userController")



router.post("/signup",userController.signup );
router.post("/login", userController.login);
router.post("/addModerator", userController.addModerator)
router.post("/verifyToken",userController.verifyToken);
router.get("/currentUser", auth, userController.currentUser)
router.get('/logout',auth,userController.logout)



module.exports = router;