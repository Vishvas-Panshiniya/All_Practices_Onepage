const mysql = require("../config/db_connection");
const insertdata = require("../middleware/queryrun");
var bodyparser = require("body-parser");

exports.indexpage = async (req, res) => {
    try {
        let a = req.query.p || 1;
        let query = req.query.sql || "default";
        let limit = 10;
        const err = "this doesn't exits"
        let offset = (Number(a) - 1) * 10;
        if (query == "default") {
            res.render("dynamic_queryrun/component", { l: 0 });
        }
        else{
            let result = await insertdata(query);
            if (err || result.length == 0) {
                  res.render("dynamic_queryrun/error",{query,err})
            }
            else{
                let max = result.length;
                let page = Math.ceil(max / limit);
            if (err) {
              // console.log(err);
              res.render("dynamic_queryrun/error", { query, err});
            } else {
              let result2 = result.slice(offset, offset + limit);
              res.render("dynamic_queryrun/component", { query, result2, l:1, a, page });
            }
            }
        }
    } catch (err) {
        console.log(err);
    }
}