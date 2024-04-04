const mysql = require("../config/db_connection");
const insertdata = require("../middleware/query_run");
const bodyparser = require("body-parser");

exports.delimiter = async (req, res) => {
    try {
        let show = req.query.search;
        let search = req.query.search + "_";
        // list of string
        let array = [];
        // all split diffrent fileds
        let fname = [];
        let lname = [];
        let email = [];
        let no = [];
        let dob = [];
        let city = [];
        // condition using this array
        let list = [];
        // query run
        let query = `select *, DATE_FORMAT(dob, "%Y-%m-%d") as dob from student_master`;
        // array store
        if (search) {
            for (let i = 0; i < search.length; i++) {
                for (let j = i + 1; j < search.length; j++) {
                    if (
                        search.charAt(j) === "_" ||
                        search.charAt(j) === "^" ||
                        search.charAt(j) === "$" ||
                        search.charAt(j) === "{" ||
                        search.charAt(j) === "}" ||
                        search.charAt(j) === ":"
                    ) {
                        let arr = search.slice(i, j);
                        array.push(arr);
                        i = j;
                    }
                }
            }

            // search filed store in diff. array
            for (let k = 0; k < array.length; k++) {
                if (array[k].charAt(0) === "_") {
                    fname.push(`firstname like '%${array[k].slice(1)}%'`);
                }
                if (array[k].charAt(0) === "^") {
                    lname.push(`lastname like '%${array[k].slice(1)}%'`);
                }
                if (array[k].charAt(0) === "$") {
                    email.push(`email like '%${array[k].slice(1)}%'`);
                }
                if (array[k].charAt(0) === "{") {
                    no.push(`contact_no like '%${array[k].slice(1)}%'`);
                }
                if (array[k].charAt(0) === "}") {
                    dob.push(`dob like '%${array[k].slice(1)}%'`);
                }
                if (array[k].charAt(0) === ":") {
                    city.push(`city like '%${array[k].slice(1)}%'`);
                }
            }

            // List arr
            if (fname.length > 0) {
                let name = fname.join(" or ");
                list.push(name);
            }
            if (lname.length > 0) {
                let name = lname.join(" or ");
                list.push(name);
            }
            if (email.length > 0) {
                let name = email.join(" or ");
                list.push(name);
            }
            if (no.length > 0) {
                let name = no.join(" or ");
                list.push(name);
            }
            if (dob.length > 0) {
                let name = dob.join(" or ");
                list.push(name);
            }
            if (city.length > 0) {
                let name = city.join(" or ");
                list.push(name);
            }
            // console.log(list);

            // condition store
            let condition = "";
            if (list.length > 0) {
                condition = "Where " + list.join(" and ");
            }
            query = `select *, DATE_FORMAT(dob, "%Y-%m-%d") as dob from student_master ${condition}`;
        }
        let alldata2 = await insertdata(query);
        if(alldata2.length === 0){
            res.render("delimiter_search/delimiter_error");
        }
        res.render("delimiter_search/delimiter_index", { alldata2, show });
    } catch (err) {
        console.log(err);
        res.render("allerror_page", {err});
    }
}

