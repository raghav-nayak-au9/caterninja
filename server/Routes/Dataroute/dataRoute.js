const express = require("express");
const app = require("../../app");
const router = express.Router();

const {
  createData,
  getData,
  getSingleData,
  updateData,
  deleteData,
} = require("../../Controllers/Datacontroller/dataController");

router.route("/admin/adddata/new").post(createData);
router.route("/alldata").get(getData);
router.route("/data/:id").get(getSingleData);
router.route("/admin/data/:id").put(updateData);
router.route("/admin/data/:id").delete(deleteData);

module.exports = router;
