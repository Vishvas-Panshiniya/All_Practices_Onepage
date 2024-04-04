const mysql = require("../config/db_connection");
const insertdata = require("../middleware/query_run");
const bodyparser = require("body-parser");

exports.columnorderby = async (req,res) => {
    try {
        let l = req.query.p || 1;
        let sort = req.query.sort || "asc"
        let column = req.query.column || "studentid";
        // console.log(column);
        let limit = 10;
        let offset = (Number(l)-1)*limit;
        let result = await insertdata(`select *, DATE_FORMAT(dob, "%Y/%m/%d") as dob from student_master order by ${column} ${sort}`);
        var alldata2 = result.slice(offset,offset+limit);
        res.render("column_wise_orderby/student_orderby", {l, alldata2,sort,column})
    } catch (err) {
        console.log(err);
        res.render("allerror_page", {err});
    }
}
