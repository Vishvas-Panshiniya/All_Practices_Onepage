const express = require("express");
const { authtoken } = require("../middleware/authentication");
const { indexpage } = require("../controllers/dynamicquery");
const router = express.Router();

router.route("/dashboard/sqlquery").get(authtoken,indexpage);

module.exports = router;