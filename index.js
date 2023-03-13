const express = require('express')
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"12345678",
    database:"ter_database"
});

app.get("/",(req,res)=> {
    const sqlInsert ="INSERT INTO users (username, password) VALUES ('hussein','1234')"
    db.query(sqlInsert, (err,result)=>{
    res.send("hello the server is running and hasbi is king");
    });
});
app.listen(3001,()=>{
    console.log("running on port 3001")
});