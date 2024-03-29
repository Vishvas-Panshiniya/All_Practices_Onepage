const express = require("express");
const app = express();
require("./config/db_connection");
const bodyparser = require("body-parser");
const path = require("path");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const login = require("./routers/login");
const javascripttask = require("./routers/javascripttask")
const student_datalist = require("./routers/student_datalist");
const attendence = require("./routers/students_atten")
const student_result = require("./routers/student_result")
const dynamicquery = require("./routers/dynamicquery");
const columnorderby = require("./routers/columnorderby");
const searching = require("./routers/searching")
const delimiter_search = require("./routers/delimiter_search")
const apifetch = require("./routers/apifetch");
const ajaxdropdown = require("./routers/ajaxdropdown");
const ajaxjobform = require("./routers/ajaxjobform");
const jobform = require("./routers/jobform")
const htmltask = require("./routers/htmltask")

// set the view engine to ejs
app.set("view engine", "ejs");
app.use(cookieParser());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,"public")));


// all route use
// login and registeration form
app.use("/", login);

// html task 
app.use("/login",htmltask);

// javascript task
app.use("/login", javascripttask);

// nodejs task
app.use("/login" , student_datalist)
app.use("/login" , attendence)
app.use("/login", student_result);
app.use("/login", dynamicquery);
app.use(columnorderby);
app.use("/login", searching);
app.use("/login",delimiter_search);
app.use("/login", jobform);

// ajax task
app.use("/login",apifetch);
app.use("/login",ajaxdropdown);
app.use("/login", ajaxjobform);


app.listen(process.env.port);
console.log(`Server is listening on port http://localhost:${process.env.port}/`);
