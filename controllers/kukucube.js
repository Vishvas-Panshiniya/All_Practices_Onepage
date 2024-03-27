var path = require("path");

exports.kukucube = (req,res) => {
    try {
        res.sendFile(path.join(__dirname,"../views","kukucube","kukucube.html"))
    } catch (err) {
        console.log(err);
    }
}