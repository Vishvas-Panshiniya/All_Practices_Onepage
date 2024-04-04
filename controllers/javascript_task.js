const path = require("path");

exports.dynamictable = (req,res) => {
    try {
        res.sendFile(path.join(__dirname,"../views","dynamic_table","daynamic_table.html"))
    } catch (err) {
        console.log(err);
        res.render("allerror_page", {err});
    }
}

exports.kukucube = (req,res) => {
    try {
        res.sendFile(path.join(__dirname,"../views","kukucube","kukucube.html"))
    } catch (err) {
        console.log(err);
        res.render("allerror_page", {err});
    }
}

exports.tictactoe = (req,res) => {
    try {
        res.sendFile(path.join(__dirname,"../views","tic_tac_toe","tic_tac_toe.html"))
    } catch (err) {
        console.log(err);
        res.render("allerror_page", {err});
    }
}

exports.sorting = (req,res) => {
    try {
        res.sendFile(path.join(__dirname,"../views","sorting","sorting.html"))
    } catch (err) {
        console.log(err);
        res.render("allerror_page", {err});
    }
}

exports.events = (req,res) => {
    try {
        res.sendFile(path.join(__dirname,"../views","js_events","js_events.html"))
    } catch (err) {
        console.log(err);
        res.render("allerror_page", {err});
    }
}