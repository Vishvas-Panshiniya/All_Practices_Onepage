const express = require("express");
const { authtoken } = require("../middleware/authentication");
const { jobindex, jobsubmit, joblistdata, jobupdate, updatejobdata } = require("../controllers/job_form");
const router = express.Router();

router.route("/dashboard/jobform").get(authtoken,jobindex);
router.route("/dashboard/simplejobsubmit").post(authtoken,jobsubmit);
router.route("/dashboard/simplejoblistdata").get(authtoken,joblistdata);
router.route("/dashboard/simplejobdatashow").get(authtoken,jobupdate);
router.route("/dashboard/simplejobdataupdate").post(authtoken,updatejobdata);


module.exports = router;