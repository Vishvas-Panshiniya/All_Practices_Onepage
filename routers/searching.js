const express = require("express");
const { authtoken } = require("../middleware/authentication");
const { searching } = require("../controllers/searching");
const router = express.Router();

router.route("/dashboard/searching").get(authtoken,searching);

module.exports = router;