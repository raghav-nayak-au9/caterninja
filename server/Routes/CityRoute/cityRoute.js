const express = require("express");
const router = express.Router();

const {
  getCityData,
} = require("../../Controllers/Citycontroller/cityController");

router.route("/cityData").post(getCityData);

module.exports = router;
