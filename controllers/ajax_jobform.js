const mysql = require("../config/db_connection");
const insertdata = require("../middleware/query_run");
const bodyparser = require("body-parser");

exports.jobindex = (req, res) => {
    try {
        let result1 = [{}], result2 = [{}], result3 = [{}], result4 = [{}], result5 = [{}], result6 = [{}], result7 = [{}];
        res.render("ajax_jobform/ajax_jobform_index", { result1, result2, result3, result4, result5, result6, result7 });
    } catch (err) {
        console.log(err);
        res.render("allerror_page", {err});
    }
}

exports.jobsubmit = async (req, res) => {
    try {
        const data = req.body;
        res.json({ success: true, message: 'Data received successfully.' });

        // basic_details
        let { fname, lname, designation, address1, email, address2, mobileno, city, gender, state, rstatus, zipcode, dob } = req.body;
        let query1 = `insert into basic_details (fname,lname,designation,address1,address2,email,mobileno,city,state,zipcode,gender,rstatus,dob) values ('${fname}','${lname}','${designation}','${address1}','${address2}','${email}','${mobileno}','${city}','${state}','${zipcode}','${gender}','${rstatus}','${dob}');`
        let result1 = await (insertdata(query1));
        let id = result1.insertId;
        // console.log(id);

        // education_details
        let { course, year, per } = req.body;
        for (let i = 0; i < course.length; i++) {
            if (course[i] != "" && year[i] != "" && per[i] != "") {
                await insertdata(`insert into education_details (empid,coursename,passing_year,percantage) values (${id},'${course[i]}','${year[i]}','${per[i]}');`);
            }
        }

        // work expreience
        let { company, c_designation, startdate, enddate } = req.body
        for (let j = 0; j < company.length; j++) {
            if (company[j] != "" && c_designation[j] != "" && startdate[j] != "" && enddate[j] != "") {
                await insertdata(`insert into work_expreience (empid,company_name,com_designation,start_date,end_date) values (${id},'${company[j]}','${c_designation[j]}','${startdate[j]}','${enddate[j]}');`)
            }
        }
        // Language Known
        let { l_known, r1, w1, ss1, r2, w2, ss2, r3, w3, ss3 } = req.body;
        if (l_known != null) {
            // l_known.forEach(async (e) => {
            for (let k = 0; k < l_known.length; k++) {
                if (l_known[k] === "Gujarati") {
                    let gr = r1 || 'No';
                    let gw = w1 || 'No';
                    let gs = ss1 || 'No';
                    await insertdata(`insert into language_known (empid,l_name,l_read,l_write,l_speak) values (${id},'${l_known[k]}','${gr}','${gw}','${gs}');`);
                }
                if (l_known[k] === "Hindi") {
                    let hr = r2 || 'No';
                    let hw = w2 || 'No';
                    let hs = ss2 || 'No';
                    await insertdata(`insert into language_known (empid,l_name,l_read,l_write,l_speak) values (${id},'${l_known[k]}','${hr}','${hw}','${hs}');`);
                }
                if (l_known[k] === "English") {
                    let er = r3 || 'No';
                    let ew = w3 || 'No';
                    let es = ss3 || 'No';
                    await insertdata(`insert into language_known (empid,l_name,l_read,l_write,l_speak) values (${id},'${l_known[k]}','${er}','${ew}','${es}');`);
                }
            }
        }

        // technologys 
        let { technology, techno1, techno2, techno3, techno4 } = req.body;
        if (technology != null) {
            for (let x = 0; x < technology.length; x++) {
                if (technology[x] === "mysql") {
                    await insertdata(`insert into technologies_details (empid,tech_name,tech_level) values (${id},'${technology[x]}','${techno1}');`);
                }
                if (technology[x] === "php") {
                    await insertdata(`insert into technologies_details (empid,tech_name,tech_level) values (${id},'${technology[x]}','${techno2}');`);
                }
                if (technology[x] === "laravel") {
                    await insertdata(`insert into technologies_details (empid,tech_name,tech_level) values (${id},'${technology[x]}','${techno3}');`);
                }
                if (technology[x] === "oracle") {
                    await insertdata(`insert into technologies_details (empid,tech_name,tech_level) values (${id},'${technology[x]}','${techno4}');`);
                }
            }
        }

        // Referance Contact
        let { rname, rno, relation } = req.body
        for (let k = 0; k < rname.length; k++) {
            // console.log(k);
            if (rname[k] != "" && rno[k] != "" && relation[k] != "") {
                await insertdata(`insert into referance_contact (empid,r_name,r_no,r_relation) values (${id},'${rname[k]}','${rno[k]}','${relation[k]}');`);
            }
        }

        // Preferances
        let { location, department, notice, expactc, currentctc } = req.body;
        await insertdata(`insert into preferances_details (empid,location,department,notice,expacted_ctc,current_ctc) values (${id},'${location}','${department}','${notice}','${expactc}','${currentctc}');`);
    } catch (err) {
        console.log(err);
        res.render("allerror_page", {err});
    }
}

exports.joblistdata = async (req, res) => {
    try {
        let result1 = await insertdata(`select * , DATE_FORMAT(dob, "%Y-%m-%d") as dob from basic_details;`)
        res.render("ajax_jobform/ajax_jobform_listdata", { result1 });
    } catch (err) {
        console.log(err);
        res.render("allerror_page", {err});
    }
}


exports.jobupdate = async (req, res) => {
    try {
        let id = req.query.id;
        let result1 = await insertdata(`select * , DATE_FORMAT(dob, "%Y-%m-%d") as dob from basic_details where empid = ${id};`)
        let result2 = await insertdata(`select * from education_details where empid = ${id};`)
        let result3 = await insertdata(`select * , DATE_FORMAT(start_date, "%Y-%m-%d") as start_date, DATE_FORMAT(end_date, "%Y-%m-%d") as end_date from work_expreience where empid = ${id};`)
        let result4 = await insertdata(`select * from language_known where empid = ${id};`) 
        let result5 = await insertdata(`select * from technologies_details where empid = ${id};`)
        let result6 = await insertdata(`select * from referance_contact where empid = ${id};`)
        let result7 = await insertdata(`select * from preferances_details where empid = ${id};`)
        res.render("ajax_jobform/ajax_jobform_index", { result1, result2, result3, result4, result5, result6, result7, id });
    } catch (err) {
        console.log(err);
        res.render("allerror_page", {err});
    }
}

exports.updatejobdata = async (req, res) => {
    try {
        let id = req.body.empid;
        res.json({ success: true, message: 'Data update successfully.' });
        // basic_details
        let { fname, lname, designation, address1, email, address2, mobileno, city, gender, state, rstatus, zipcode, dob } = req.body;
        await insertdata(`update basic_details set fname = '${fname}',lname = '${lname}',designation = '${designation}',address1 = '${address1}',address2 = '${address2}',email = '${email}', mobileno = '${mobileno}', city = '${city}', state = '${state}', zipcode = '${zipcode}', gender = '${gender}', rstatus = '${rstatus}', dob = '${dob}' where empid = ${id};`)

        // education_details
        let { course, year, per, courseid } = req.body;
        for (let i = 0; i < course.length; i++) {
            if (courseid[i]) {
                if (course[i] != "" && year[i] != "" && per[i] != "") {
                    await insertdata(`update education_details set coursename = '${course[i]}' , passing_year = '${year[i]}' , percantage = ${per[i]} where empid = ${id} and courseid = ${courseid[i]};`);
                }
            } else if (courseid[i] === "") {
                if (course[i] != "" && year[i] != "" && per[i] != "") {
                    await insertdata(`insert into education_details (empid,coursename,passing_year,percantage) values (${id},'${course[i]}','${year[i]}','${per[i]}');`);
                }
            }
            else {
                if (course[i] != "" && year[i] != "" && per[i] != "") {
                    await insertdata(`insert into education_details (empid,coursename,passing_year,percantage) values (${id},'${course[i]}','${year[i]}','${per[i]}');`);
                }
            }
        }

        // company_details
        let { company, c_designation, startdate, enddate, workid } = req.body
        // console.log(company);
        if (company != null) {
            for (let j = 0; j < company.length; j++) {
                if (workid[j]) {
                    if (company[j] != "" && c_designation[j] != "" && startdate[j] != "" && enddate[j] != "") {
                        await insertdata(`update work_expreience set company_name = '${company[j]}', com_designation = '${c_designation[j]}', start_date = '${startdate[j]}', end_date = '${enddate[j]}' where empid = ${id} and  workid = ${workid[j]};`)
                    }
                }
                else if (workid[j] === "") {
                    if (company[j] != "" && c_designation[j] != "" && startdate[j] != "" && enddate[j] != "") {
                        await insertdata(`insert into work_expreience (empid,company_name,com_designation,start_date,end_date) values (${id},'${company[j]}','${c_designation[j]}','${startdate[j]}','${enddate[j]}');`)
                    }
                }
                else {
                    if (company[j] != "" && c_designation[j] != "" && startdate[j] != "" && enddate[j] != "") {
                        await insertdata(`insert into work_expreience (empid,company_name,com_designation,start_date,end_date) values (${id},'${company[j]}','${c_designation[j]}','${startdate[j]}','${enddate[j]}');`)
                    }
                }
            }
        }

        // Language Known
        let { l_known, r1, w1, ss1, r2, w2, ss2, r3, w3, ss3 } = req.body;
        // console.log(l_known);
        if (l_known != null) {
            for (let k = 0; k < l_known.length; k++) {
                if (l_known[k] === "Gujarati") {
                    let gr = r1 || 'No';
                    let gw = w1 || 'No';
                    let gs = ss1 || 'No';
                    await insertdata(`update language_known set l_name = '${l_known[k]}',l_read = '${gr}',l_write = '${gw}',l_speak = '${gs}' where empid = ${id} and l_name = '${l_known[k]}';`);
                }
                if (l_known[k] === "Hindi") {
                    let hr = r2 || 'No';
                    let hw = w2 || 'No';
                    let hs = ss2 || 'No';
                    await insertdata(`update language_known set l_name = '${l_known[k]}',l_read = '${hr}',l_write = '${hw}',l_speak = '${hs}' where empid = ${id} and l_name = '${l_known[k]}';`);
                }
                if (l_known[k] === "English") {
                    let er = r3 || 'No';
                    let ew = w3 || 'No';
                    let es = ss3 || 'No';
                    await insertdata(`update language_known set l_name = '${l_known[k]}',l_read = '${er}',l_write = '${ew}',l_speak = '${es}' where empid = ${id} and l_name = '${l_known[k]}';`);
                }
            }
        }

        // technologys 
        let { technology, techno1, techno2, techno3, techno4 } = req.body;
        if (technology != null) {
            for (let x = 0; x < technology.length; x++) {
                if (technology[x] === "mysql") {
                    await insertdata(`update technologies_details set tech_name = '${technology[x]}',tech_level = '${techno1}' where empid = ${id} and tech_name = '${technology[x]}';`)
                }
                if (technology[x] === "php") {
                    await insertdata(`update technologies_details set tech_name = '${technology[x]}',tech_level = '${techno2}' where empid = ${id} and tech_name = '${technology[x]}';`);
                }
                if (technology[x] === "laravel") {
                    await insertdata(`update technologies_details set tech_name = '${technology[x]}',tech_level = '${techno3}' where empid = ${id} and tech_name = '${technology[x]}';`);
                }
                if (technology[x] === "oracle") {
                    await insertdata(`update technologies_details set tech_name = '${technology[x]}',tech_level = '${techno4}' where empid = ${id} and tech_name = '${technology[x]}';`);
                }
            }
        }

        // Referance Contact
        let { rname, rno, relation, rid } = req.body
        //  console.log(rid);
        if (rname != null) {
            for (let k = 0; k < rname.length; k++) {
                if (rid[k]) {
                    if (rname[k] != "" && rno[k] != "" && relation[k] != "") {
                        await insertdata(`update referance_contact set r_name = '${rname[k]}',r_no = '${rno[k]}',r_relation = '${relation[k]}' where empid = ${id} and rid = ${rid[k]};`);
                    }
                } else if (rid[k] === "") {
                    if (rname[k] != "" && rno[k] != "" && relation[k] != "") {
                        await insertdata(`insert into referance_contact (empid,r_name,r_no,r_relation) values (${id},'${rname[k]}','${rno[k]}','${relation[k]}');`);
                    }
                }
                else {
                    if (rname[k] != "" && rno[k] != "" && relation[k] != "") {
                        await insertdata(`insert into referance_contact (empid,r_name,r_no,r_relation) values (${id},'${rname[k]}','${rno[k]}','${relation[k]}');`);
                    }
                }
            }
        }

        let { location, department, notice, expactc, currentctc } = req.body;
        if (location != null && department != null && notice != null && expactc != null && currentctc != null) {
            await insertdata(`update preferances_details set location = '${location}',department = '${department}',notice = '${notice}',expacted_ctc = '${expactc}',current_ctc = '${currentctc}' where empid = ${id};`)
        }
    } catch (err) {
        console.log(err);
        res.render("allerror_page", {err});
    }
}