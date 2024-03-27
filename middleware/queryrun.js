const mysql = require("../config/db_connection");

//Query Run Using Async
function insertdata(query){
    return new Promise((resolve,rejects) => {
      mysql.query(query, (err,result) => {
        if(err){
          return rejects(err);
        }else{
          // console.log(result);
          return resolve(result)
        }
      })
    })
  }

  module.exports = insertdata;