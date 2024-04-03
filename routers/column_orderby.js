const express = require("express");
const { authtoken } = require("../middleware/authentication");
const { columnorderby } = require("../controllers/column_orderby");
const router = express.Router();

router.route("/dashboard/columnorderby").get(authtoken,columnorderby);

module.exports = router;