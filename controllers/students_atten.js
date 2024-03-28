const mysql = require("../config/db_connection");
const insertdata = require("../middleware/queryrun");
var bodyparser = require("body-parser");

exports.indexpage = async (req, res) => {
    try {
        let l = req.query.p || 1;
        let month = req.query.month || "December"
        let year = req.query.year || "2023"
        let offset = (Number(l)-1)*10;
        let result = await insertdata(`SELECT student_master.studentid, student_master.firstname,student_master.lastname, monthname(attendence_master.atten_date) as month, count(attendence_master.stu_status) as status FROM student_master INNER JOIN attendence_master ON student_master.studentid = attendence_master.studentid WHERE stu_status = "Present" and year(atten_date)= ${year} GROUP BY studentid,month HAVING month = "${month}" limit 10 offset ${offset}`);
        res.render("attendence_report/student_atten", {l, result, month, year})
    } catch (err) {
        console.log(err);
    }
}
