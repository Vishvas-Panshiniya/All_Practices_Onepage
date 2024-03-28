const path = require("path");

exports.tictactoe = (req,res) => {
    try {
        res.sendFile(path.join(__dirname,"../views","tic-tac-toe","tic-tac-toe.html"))
    } catch (err) {
        console.log(err);
    }
}