const mysql = require("mysql");

const db = mysql.createConnection({
    host: "friends-from-mbti.cxlh4tmxp18b.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "alstjqlqjs1",
    database: "friends_from_mbti"
});

db.connect();

module.exports = db;
