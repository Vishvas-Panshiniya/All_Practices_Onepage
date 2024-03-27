var path = require("path");

exports.sorting = (req,res) => {
    try {
        res.sendFile(path.join(__dirname,"../views","sorting","sorting.html"))
    } catch (err) {
        console.log(err);
    }
}