const express = require("express");
const {homepage, signin, signup, registeration, password, activation, userprofile, dashboard, forgetpassword, setforgetpassword} = require('../controllers/login');
const { authtoken } = require("../middleware/authentication");
const router = express.Router();

router.route("/").get(homepage);
router.route("/signin").get(signin);
router.route("/signup").get(signup);
router.route("/register").post(registeration);
router.route("/password").get(password);
router.route("/activation").post(activation);
router.route("/profile").post(userprofile);
router.route("/login/dashboard").get(authtoken,dashboard);
router.route("/forgetpassword").get(forgetpassword);
router.route("/forgetpassword").post(setforgetpassword);


module.exports = router;