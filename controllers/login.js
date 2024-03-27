const mysql = require("../config/db_connection");
var path = require("path");
const insertdata = require("../middleware/queryrun");
var md5 = require("md5");
var jwt = require("jsonwebtoken");
var moment = require("moment");


exports.homepage = (req,res) =>{
    try {
        res.render("login_page/index")

    } catch (err) {
        console.log(err);
    }
}

exports.signin = (req,res) => {
    try {
        res.clearCookie("token");
        res.render("login_page/signin");
      } catch (err) {
        console.log(err);
      }
}

exports.signup = (req,res) => {
    try {
        res.render("login_page/signup",{result: {} ,msg: ""});
    } catch (err) {
      console.log(err);
    }
}

exports.registeration = async (req,res) =>{
    try {
        let{fname, lname,email} = req.body;
        let result = req.body
        // console.log(result);
        let user = await insertdata(`select * from users where email = '${email}'`)
        if(user.length === 0){
          let salt = randomGenerate(4);
          let key = randomGenerate(15);
          let query = await insertdata(`insert into users (fname, lname,email,pass_word,salt,accesskey) values ('${fname}','${lname}','${email}','','${salt}','${key}')`);
          let id = query.insertId;
          res.render('login_page/accesskey', {id,key,salt})
        }else{
          let msg = "Email Already Exixts!";
          res.render("login_page/signup",{msg,result})
        }
    } catch (err) {
        console.log(err);
    }
}

exports.password = async (req,res) => {
    try {
        let id = req.query.id;
        let key = req.query.key;
        let result = await insertdata(`select * from users where id = ${id} and accesskey = '${key}'`)
        // console.log(result);
        var expiry = new Date().valueOf() - result[0].created_time.valueOf();
        let hours = Math.floor(expiry/(1000 * 60 * 60));
        // console.log(hours);
        res.render("login_page/password" , {result,hours});
    } catch (err) {
        console.log(err);
    }
}

exports.activation = async (req,res) => {
    try {
        let{id,key,salt,rpassword} = req.body;
        let password = md5(`${rpassword}${salt}`);
        let query =await insertdata(`update users set pass_word = '${password}' where id = ${id} and accesskey = '${key}'`);
            res.json({status: 200 , msg: "Password Set Successfully Go to :-"});
    } catch (err) {
        console.log(err);
    }
}

exports.userprofile = async (req,res) => {
    try {
        let {email,password} = req.body
        let result2 = await insertdata(`select * from users where email = '${email}'`)
        if(result2.length === 0){
          res.json({status : 400 ,message: "username or password invalid!"});
        }else{
            let id = result2[0].id;
            let pass_word = md5(`${password}${result2[0].salt}`);
            const token = jwt.sign({ id },process.env.KEY,{ expiresIn: '1h' });
            res.cookie('token',token, { expires: new Date(Date.now() + 900000), httpOnly: true });

            if(result2[0].pass_word === pass_word){
                res.json({status : 200 ,message: "Login complete",token: token, message2:"Click here to <b>:-</b><a href='http://localhost:7095/dashboard' class = 'signbtn'>Go to Dashboard </a>"})
            }else{
                res.json({status : 400 , message: "username or password invalid!"})
            }
        }
    } catch (err) {
        console.log(err);
    }
}

exports.dashboard = (req,res) => {
    try {
          res.render("login_page/dashboard",{name: req.cookies.token.name})
      } catch (err) {
          console.log(err);
      }
}

exports.forgetpassword = async (req,res) => {
    try {
        res.render("login_page/emailvalid");
      } catch (err) {
        console.log(err);
      }
}

exports.setforgetpassword = async (req,res) => {
    try {
        // console.log(req.body);
        let {email,password} = req.body
        let result2 = await insertdata(`select * from users where email = '${email}'`)
        if(result2.length === 0){
          res.json({status : 400 ,message: "email doesn't exixt!"});
        }else{
          let id = result2[0].id
          let salt = randomGenerate(4);
          let key = randomGenerate(15);
          let update_time = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
          let result3 = await insertdata(`update users set salt = '${salt}', accesskey = '${key}',created_time = '${update_time}' where id = ${id}`);
    
          res.json({status : 200 ,salt: salt, key: key, id: id});
        }
      } catch (err) {
        console.log(err);
      }
}