const mysql = require("../config/db_connection");
const insertdata = require("../middleware/queryrun");
var bodyparser = require("body-parser");


exports.indexpage = async (req,res) => {
    try {
        let l = req.query.p || 1;
        let offset = (Number(l)-1)*30;
        let result = await insertdata(`SELECT student_master.studentid, student_master.firstname,student_master.lastname,sum(exam_record.obtained_theroymark) as totaltheroymark,sum(exam_record.obtained_pramark) as totalpramark FROM student_master LEFT JOIN exam_record ON student_master.studentid = exam_record.studentid group by studentid , examid limit 30 offset ${offset}`);
        res.render("student_result/resultlist", {l, result})
    } catch (err) {
        console.log(err);
    }
}

exports.studentresult = async (req,res) => {
    try {
        let id = req.query.id;
        let result = await insertdata(`SELECT student_master. *,exam_record. *, subject_master. * FROM student_master LEFT JOIN exam_record ON student_master.studentid = exam_record.studentid
        LEFT JOIN subject_master on exam_record.subjectid = subject_master.subjectid where student_master.studentid = ${id}`);
        let result2 = await insertdata(`select count(studentid) as atten from attendence_master where stu_status = "Present" and studentid = ${id}`);
        res.render("student_result/student_result", {result , result2})

    } catch (err) {
        console.log(err);
    }
}