var path = require("path");

exports.events = (req,res) => {
    try {
        res.sendFile(path.join(__dirname,"../views","js_events","js_events.html"))
    } catch (err) {
        console.log(err);
    }
}