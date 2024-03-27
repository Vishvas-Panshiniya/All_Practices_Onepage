const mysql = require('../config/db_connection')

exports.authtoken = (req,res,next) => {
    let {token} = req.cookies;
    if(!token) res.send("Token Is not genrating")
    next();
}