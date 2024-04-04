const path = require("path");

exports.posts = (req,res) => {
    try {
        res.sendFile(path.join(__dirname,"../views","api_fetch","apifetch_index.html"));
    } catch (err) {
        console.log(err);
        res.render("allerror_page", {err});
    }
}

exports.postsid = (req,res) => {
    try {
        res.sendFile(path.join(__dirname,"../views","api_fetch","apifetch_showdetail.html"));
    } catch (err) {
        console.log(err);
        res.render("allerror_page", {err});
    }
}