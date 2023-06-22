const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");

// router.get("/", authController.index);
router.post("/signin", authController.signin);
router.post("/verify-user", authController.verifyUser);

module.exports = router;
