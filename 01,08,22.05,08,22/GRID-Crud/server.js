const express = require("express");
const app = express();
const mysql = require("mysql");
require("dotenv").config();

const { insert, read, update, remove } = require("./js/consulta");

app.use(express.json());

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to database");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/insert", (req, res) => {
  insert(connection, (result) => {
    res.json(result);
  });
});

app.get("/read", (req, res) => {
  read(connection, (result) => {
    res.json(result);
  });
});

app.get("/update", (req, res) => {
  update(connection, { id: 1 }, (result) => {
    res.json(result);
  });
});

app.get("/remove", (req, res) => {
  remove(connection, { id: 1 }, (result) => {
    res.json(result);
  });
});

app.listen(8080, () => {
  console.log("Servidor en puerto 8080");
});
