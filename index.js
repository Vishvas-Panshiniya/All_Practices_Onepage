const express = require("express");
const app = express();
require("./config/db_connection");
const bodyparser = require("body-parser");
const path = require("path");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const login = require("./routers/login");
const dynamictable = require("./routers/dynamictable");
const kukucube  = require("./routers/kukucube");
const tictactoe = require("./routers/tic-tac-toe");
const sorting = require("./routers/sorting");

// set the view engine to ejs
app.set("view engine", "ejs");
app.use(cookieParser());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,"public")));


// all route use
// login and registeration form
app.use("/", login);
app.use("/login", dynamictable)
app.use("/login" , kukucube)
app.use("/login" , tictactoe)
app.use("/login" , sorting)

app.listen(process.env.port);
console.log(`Server is listening on port http://localhost:${process.env.port}/`);
