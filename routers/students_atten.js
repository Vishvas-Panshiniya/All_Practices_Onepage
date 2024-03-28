const express = require("express");
const { indexpage } = require("../controllers/students_atten");
const { authtoken } = require("../middleware/authentication");
const router = express.Router();

router.route("/dashboard/attendence").get(authtoken,indexpage);

module.exports = router;