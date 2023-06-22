const express = require("express");

const router = express.Router();
const projectController = require("../controller/projectController");


router.post("/add", projectController.add);
router.get("/get", projectController.get);

module.exports = router;
