const express = require("express");
const app = express();
require("./config/db_connection");
const bodyparser = require("body-parser");
const path = require("path");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const login = require("./routers/login");
const javascript_task = require("./routers/javascript_task")
const student_datalist = require("./routers/student_datalist");
const attendence = require("./routers/students_atten")
const student_result = require("./routers/student_result")
const dynamic_query = require("./routers/dynamic_query");
const column_orderby = require("./routers/column_orderby");
const searching = require("./routers/searching")
const delimiter_search = require("./routers/delimiter_search")
const api_fetch = require("./routers/api_fetch");
const ajax_dropdown = require("./routers/ajax_dropdown");
const ajax_jobform = require("./routers/ajax_jobform");
const job_form = require("./routers/job_form")
const html_task = require("./routers/html_task")

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
app.use("/login",html_task);

// javascript task
app.use("/login", javascript_task);

// nodejs task
app.use("/login" , student_datalist)
app.use("/login" , attendence)
app.use("/login", student_result);
app.use("/login", dynamic_query);
app.use("/login",column_orderby);
app.use("/login", searching);
app.use("/login",delimiter_search);
app.use("/login", job_form);

// ajax task
app.use("/login",api_fetch);
app.use("/login",ajax_dropdown);
app.use("/login", ajax_jobform);


app.listen(process.env.port);
console.log(`Server is listening on port http://localhost:${process.env.port}/`);
