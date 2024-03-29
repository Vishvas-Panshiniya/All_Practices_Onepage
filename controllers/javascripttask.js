const path = require("path");

exports.dynamictable = (req,res) => {
    try {
        res.sendFile(path.join(__dirname,"../views","dynamictable","daynamictable.html"))
    } catch (err) {
        console.log(err);
    }
}

exports.kukucube = (req,res) => {
    try {
        res.sendFile(path.join(__dirname,"../views","kukucube","kukucube.html"))
    } catch (err) {
        console.log(err);
    }
}

exports.tictactoe = (req,res) => {
    try {
        res.sendFile(path.join(__dirname,"../views","tic-tac-toe","tic-tac-toe.html"))
    } catch (err) {
        console.log(err);
    }
}

exports.sorting = (req,res) => {
    try {
        res.sendFile(path.join(__dirname,"../views","sorting","sorting.html"))
    } catch (err) {
        console.log(err);
    }
}

exports.events = (req,res) => {
    try {
        res.sendFile(path.join(__dirname,"../views","js_events","js_events.html"))
    } catch (err) {
        console.log(err);
    }
}