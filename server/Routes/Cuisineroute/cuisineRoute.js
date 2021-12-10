const express = require("express");

const router = express.Router();

const {
  cuisineController,
} = require("../../Controllers/Cuisinecontroller/cuisineController");

router.route("/cuisineData").post(cuisineController);

module.exports = router;
