const path = require("path");

exports.htmltask1 = (req,res) => {
    try {
        res.sendFile(path.join(__dirname,"../views","html_task","html_task1.html"))
    } catch (err) {
        console.log(err);
    }
}

exports.htmltask2 = (req,res) => {
    try {
        res.sendFile(path.join(__dirname,"../views","html_task","html_task2.html"))
    } catch (err) {
        console.log(err);
    }
}

exports.htmltask3 = (req,res) => {
    try {
        res.sendFile(path.join(__dirname,"../views","html_task","html_task3.html"))
    } catch (err) {
        console.log(err);
    }
}