const express = require("express");

const router = express.Router();
const projectController = require("../controller/projectController");


router.post("/add", projectController.add);
router.get("/get", projectController.get);
router.post("/getById", projectController.getById);
router.get("/getTwoLatest", projectController.getTwoLatest);
router.post("/delete", projectController.delete);

module.exports = router;
