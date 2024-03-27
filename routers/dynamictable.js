const express = require("express");
const { dynamictable } = require('../controllers/dynamictable');
const router = express.Router();

router.route("/dashboard/dynamictable").get(dynamictable);

module.exports = router;