const express = require("express");
const { authtoken } = require("../middleware/authentication");
const { states, citys, ajaxindex } = require("../controllers/ajaxdropdown");
const router = express.Router();

router.route("/dashboard/ajaxdropdown").get(authtoken,ajaxindex);
router.route("/dashboard/state").get(authtoken,states);
router.route("/dashboard/city/:state").get(authtoken,citys);


module.exports = router;