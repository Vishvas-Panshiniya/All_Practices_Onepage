const express = require("express");
const { authtoken } = require("../middleware/authentication");
const { tictactoe } = require("../controllers/tic-tac-toe");
const router = express.Router();

router.route("/dashboard/tictactoe").get(authtoken,tictactoe);

module.exports = router;