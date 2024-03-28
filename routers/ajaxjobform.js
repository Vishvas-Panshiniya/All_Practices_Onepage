const express = require("express");
const { authtoken } = require("../middleware/authentication");
const { jobindex, jobsubmit, joblistdata, jobupdate, updatejobdata } = require("../controllers/ajaxjobform");
const router = express.Router();

router.route("/dashboard/ajaxjobform").get(authtoken,jobindex);
router.route("/dashboard/jobdatasubmit").post(authtoken,jobsubmit);
router.route("/dashboard/joblistdata").get(joblistdata);
router.route("/dashboard/jobdatashow").get(jobupdate);
router.route("/dashboard/jobdataupdate").post(updatejobdata);


module.exports = router;