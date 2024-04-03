const express = require("express");
const { authtoken } = require("../middleware/authentication");
const { htmltask1, htmltask2, htmltask3 } = require("../controllers/html_task");
const router = express.Router();

router.route("/dashboard/htmltask1").get(authtoken,htmltask1);
router.route("/dashboard/htmltask2").get(authtoken,htmltask2);
router.route("/dashboard/htmltask3").get(authtoken,htmltask3);

module.exports = router;