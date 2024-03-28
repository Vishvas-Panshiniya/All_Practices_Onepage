const mysql = require("../config/db_connection");
const insertdata = require("../middleware/queryrun");

exports.searching = async (req,res) => {
    try {
    let l = req.query.p || 1;
    let {id,fname,lname,email,city,opretor} = req.query;
    let limit = 10;
    let offset = (Number(l) - 1) * limit;
    let result = `select *, DATE_FORMAT(dob, "%Y/%m/%d") as dob from student_master`
    if(id){
        result = `select *, DATE_FORMAT(dob, "%Y/%m/%d") as dob from student_master where studentid in (${id})`
    }else{
        let array = [];

      if(fname) array.push(`firstname like '%${fname}%'`)
      if(lname) array.push(`lastname like '%${lname}%'`)
      if(email) array.push(`email like'%${email}%'`)
      if(city) array.push(`city like '%${city}%'`)

      let where = " ";
      if(array.length > 0){
        where = "where " + array.join(` ${opretor} `) ;
      }
      result = `select *, DATE_FORMAT(dob, "%Y/%m/%d") as dob from student_master ${where}`;
    }
    let result2 = await insertdata(result)
        var totalpage = result2.length;
        var page = Math.ceil(totalpage / limit);
        var alldata2 = result2.slice(offset, offset + limit);
        res.render("searching/searching_index", { l, alldata2, page, id , fname, lname, email, city, opretor});
    } catch (err) {
        console.log(err);
    }
}