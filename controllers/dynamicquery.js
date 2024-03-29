const mysql = require("../config/db_connection");
const insertdata = require("../middleware/queryrun");
const bodyparser = require("body-parser");

exports.indexpage = async (req, res) => {
    try {
        let a = req.query.p || 1;
        let query = req.query.sql || "default";
        let limit = 10;
        let offset = (Number(a) - 1) * 10;
        if (query == "default") {
            res.render("dynamic_queryrun/component", { l: 0 });
        }
        else {
            let result = await insertdata(query);
            if (result.length == 0) {
                res.render("dynamic_queryrun/error",{query})
            }
            else {
                let max = result.length;
                let page = Math.ceil(max / limit);
            if(result.err){
                res.render("dynamic_queryrun/error",{query})
            }else{
                let result2 = result.slice(offset, offset + limit);
                res.render("dynamic_queryrun/component", { query, result2, l: 1, a, page });
            }
            }
        }
    } catch (err) {
        console.log(err);
    }
}