const express = require("express");
const { authtoken } = require("../middleware/authentication");
const { jobindex, jobsubmit, joblistdata, jobupdate, updatejobdata } = require("../controllers/ajax_jobform");
const router = express.Router();

router.route("/dashboard/ajaxjobform").get(authtoken,jobindex);
router.route("/dashboard/jobdatasubmit").post(authtoken,jobsubmit);
router.route("/dashboard/joblistdata").get(authtoken,joblistdata);
router.route("/dashboard/jobdatashow").get(authtoken,jobupdate);
router.route("/dashboard/jobdataupdate").post(authtoken,updatejobdata);


module.exports = router;