const express = require("express");
const { authtoken } = require("../middleware/authentication");
const { delimiter } = require("../controllers/delimiter_search");
const router = express.Router();

router.route("/dashboard/delimitersearch").get(authtoken,delimiter);

module.exports = router;