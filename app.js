// MYSQL
const mysql = require('mysql');
const connection = require('./db/mysqlConenction'); //export msyq connection

// Express
const express = require('express');
const app = express()
const port = 3000
const hostname = "localhost"

app.set("view engine", "ejs")
app.use(express.static('images'));

// Routing
app.get("/", (req, res) => {
    res.render("index.ejs")
})
app.get("/hastakayit", (req, res) => {
    res.render("hastakayit.ejs")
})
app.get("/doktorkayit", (req, res) => {
    res.render("doktorkayit.ejs")
})
app.get("/hastalist", (req, res) => {
    connection.query('SELECT * FROM hastalar', (err, results, fields)=>{
        if (err){
            res.send("<h1> Sunucu Tarafında bir hata oluştu </h1>" + err + "<br><a href='/'> Ana Menüye Dön </a>")
        }else{
            res.render("hastalist", {data:results})
        }
    })
})
app.get("/doktorlist", (req, res) => {
    connection.query('SELECT * FROM doktorlar', (err, results, fields)=>{
        if (err){
            res.send("<h1> Sunucu Tarafında bir hata oluştu </h1>" + err + "<br><a href='/'> Ana Menüye Dön </a>")
        }else{
            res.render("doktorlist", {data:results})
        }
    })
})
app.get("/doktorgiris", (req, res) => {
    res.render("doktorgiris.ejs")
})
app.get("/hastagiris", (req, res) => {
    res.render("hastagiris.ejs")
})

app.get('/randevukayit', (req, res) =>{
    res.render("randevukayit.ejs")
})



app.listen(port,hostname, () =>{
    console.log(`http://${hostname}:${port}`);
})