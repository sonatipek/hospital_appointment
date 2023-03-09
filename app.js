// MYSQL
const mysql = require('mysql');
const connection = require('./db/mysqlConenction'); //export msyq connection

// Express
const express = require('express');
const app = express()
const port = 3000
const hostname = "localhost"

app.set("view engine", "ejs")

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
    res.render("hastalist.ejs")
})
app.get("/doktorlist", (req, res) => {
    res.render("doktorlist.ejs")
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