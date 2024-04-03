const express = require("express");
const { authtoken } = require("../middleware/authentication");
const { dynamictable, kukucube, tictactoe, sorting, events } = require("../controllers/javascript_task");
const router = express.Router();

router.route("/dashboard/dynamictable").get(authtoken,dynamictable);
router.route("/dashboard/kukucube").get(authtoken,kukucube);
router.route("/dashboard/tictactoe").get(authtoken,tictactoe);
router.route("/dashboard/sorting").get(authtoken,sorting);
router.route("/dashboard/events").get(authtoken,events);

module.exports = router;