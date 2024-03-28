const path = require("path");

exports.dynamictable = (req,res) => {
    try {
        res.sendFile(path.join(__dirname,"../views","dynamictable","daynamictable.html"))
    } catch (err) {
        console.log(err);
    }
}