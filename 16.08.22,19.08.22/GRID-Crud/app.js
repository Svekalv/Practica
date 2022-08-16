const express = require('express');
const app = express();
const mysql = require("mysql");
require("dotenv").config();

const { insert, read, update, remove, buscarGrilla } = require("./js/consulta");

app.use(express.json());

app.use(express.static('./'));

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
})

connection.connect((err) => {
    if(err) throw err;
    console.log("Connected to database");
})

app.get('/', (req, res) => {
    res.setHeader('Content-type', 'text/html');
    res.sendFile('./index.html')
})  
app.post('/guardar', (req, res) => {
    var string = req.body
    console.log(string)
    insert(connection, string, (result)=> {
        res.json(result);
    })
})

app.get('/buscarGrilla', (req, res) => {
    buscarGrilla(connection,req, (result) =>{
        res.json(result);
    });
})

app.get('/read', (req, res) => {
    read(connection, (result) =>{
        res.json(result);
    });
})

app.get('/update', (req, res) => {
    update(connection, {id:1}, (result) =>{
        res.json(result);
    });
})

app.post('/remove', (req, res) => {
    
    var id =  req.body
    console.log("inicio remove " + req)
    remove(connection, id, (result) =>{
        res.json(result);
    });
})

app.listen(8080, () => {
    console.log("servidor en puerto 8080");
});
