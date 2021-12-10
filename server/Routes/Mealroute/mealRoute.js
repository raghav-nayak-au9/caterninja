const express = require("express");
const router = express.Router();

const {
  getMealData,
} = require("../../Controllers/Mealcontroller/mealController");

router.route("/mealData").post(getMealData);

module.exports = router;
