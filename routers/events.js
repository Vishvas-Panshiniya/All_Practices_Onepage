const express = require("express");
const { authtoken } = require("../middleware/authentication");
const { events } = require("../controllers/events");
const router = express.Router();

router.route("/dashboard/events").get(authtoken,events);

module.exports = router;