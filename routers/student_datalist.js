const express = require("express");
const { mainpage, component, orderby } = require("../controllers/student_datalist");
const { authtoken } = require("../middleware/authentication");
const router = express.Router();


router.route("/dashboard/datalist").get(authtoken,mainpage);
router.route("/dashboard/component").get(authtoken,component);
router.route("/dashboard/orderby").get(authtoken,orderby);

module.exports = router;