const express = require("express");
const { authtoken } = require("../middleware/authentication");
const { indexpage, studentresult } = require("../controllers/student_result");
const router = express.Router();

router.route("/dashboard/resultlist").get(authtoken,indexpage);
router.route("/dashboard/resultlist/studentdata").get(authtoken,studentresult);

module.exports = router;