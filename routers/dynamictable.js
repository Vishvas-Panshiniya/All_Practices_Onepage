const express = require("express");
const { dynamictable } = require('../controllers/dynamictable');
const { authtoken } = require("../middleware/authentication");
const router = express.Router();

router.route("/dashboard/dynamictable").get(authtoken,dynamictable);

module.exports = router;