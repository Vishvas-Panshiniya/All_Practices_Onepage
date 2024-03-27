const express = require("express");
const { authtoken } = require("../middleware/authentication");
const { kukucube } = require("../controllers/kukucube");
const router = express.Router();

router.route("/dashboard/kukucube").get(authtoken,kukucube);

module.exports = router;