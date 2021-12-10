const express = require("express");
const router = express.Router();

const {
  getStarterData,
} = require("../../Controllers/Startercontroller/starterController");

router.route("/starterData").get(getStarterData);

module.exports = router;
