const express = require("express");
const { authtoken } = require("../middleware/authentication");
const { sorting } = require("../controllers/sorting");
const router = express.Router();

router.route("/dashboard/sorting").get(authtoken,sorting);

module.exports = router;