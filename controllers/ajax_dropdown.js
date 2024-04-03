const mysql = require("../config/db_connection");
const insertdata = require("../middleware/query_run");
const bodyparser = require("body-parser");

exports.ajaxindex = (req,res) => {
    try {
        res.render("ajax_dropdown/ajax_dropdown");
    } catch (err) {
        console.log(err);
    }
}

exports.states = async (req,res) => {
    try {
        let result1 = await insertdata(`select * from states`);
      const states = result1;
        res.send(states);
    } catch (err) {
        console.log(err);
    }
}

exports.citys = async (req,res) => {
    try {
        const result2 = await insertdata(`select * from cities where stateid = ${req.params.state}`);
        const cities = result2;
        res.send(cities);
    } catch (err) {
        console.log(err);
    }
}