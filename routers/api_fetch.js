const express = require("express");
const { authtoken } = require("../middleware/authentication");
const { posts, postsid } = require("../controllers/api_fetch");
const router = express.Router();

router.route("/dashboard/apifetch").get(authtoken,posts);
router.route("/dashboard/posts/:id").get(authtoken,postsid)

module.exports = router;