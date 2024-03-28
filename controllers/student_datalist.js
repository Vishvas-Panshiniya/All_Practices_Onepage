const mysql = require("../config/db_connection");
const insertdata = require("../middleware/queryrun");

exports.mainpage = async (req, res) => {
    try {
        let alldata2 = await insertdata(`select * , DATE_FORMAT(dob, "%Y/%m/%d") as dob,DATE_FORMAT(created_at, "%Y/%m/%d %T") as created_at from student_master1`);
        res.render("student_datalist/datalist", { alldata2 })
    } catch (err) {
        console.log(err);
    }
}

exports.component = async (req, res) => {
    try {
        let l = req.query.p;
        if (isNaN(l)) {
            l = 1;
        }
        let offset = (Number(l) - 1) * 200;
        let result = await insertdata(`select *, DATE_FORMAT(dob, "%Y/%m/%d") as dob,DATE_FORMAT(created_at, "%Y/%m/%d %T") as created_at  from student_master1 limit 200 offset ${offset}`);
        res.render("student_datalist/pagination", { l, alldata2: result })
    } catch (err) {
        console.log(err);
    }
}

exports.orderby = async (req, res) => {
    try {
        let l = req.query.p || 1;
        let sort = req.query.sort || "asc"
        let column = req.query.column || "studentid";
        let offset = (Number(l) - 1) * 200;
        let result = await insertdata(`select *, DATE_FORMAT(dob, "%Y/%m/%d") as dob,DATE_FORMAT(created_at, "%Y/%m/%d %T") as created_at  from student_master1 order by ${column} ${sort} limit 200 offset ${offset}`);
        res.render("orderby", {l, alldata2 : result,sort,column})
    } catch (err) {
        console.log(err);
    }
}