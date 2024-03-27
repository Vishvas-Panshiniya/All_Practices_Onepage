var mysql = require("mysql");
require("dotenv").config();

var mysql = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
  });
  
mysql.connect((err) => {
    if(err){
      console.log(err);
    }else{
      console.log("database connected");
    }
  })

  module.exports = mysql;