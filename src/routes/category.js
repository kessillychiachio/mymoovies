const express = require("express");
const router = express.Router();
const CategoryController = require("../controllers/CategoryController.js");

router.get("/", CategoryController.findAll);
router.get("/:id", CategoryController.find);
router.post("/", CategoryController.create);
router.post("/", CategoryController.update);
router.delete("/:id", CategoryController.delete);

module.exports = router;
