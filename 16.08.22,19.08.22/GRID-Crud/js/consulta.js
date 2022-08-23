const mysql = require("mysql");
var fs = require('fs')
var css;
var columna;
var fila;

function insert(connection, data, callback) {
  console.log('metodo guardar ' + data.nombre)
  let insertQuery =
    "INSERT INTO grilla (nombre, columna, fila, capacidad, ruta) VALUES (?, ?, ?, ?, ?)";
  let query = mysql.format(insertQuery, [
    data.nombre,
    data.columna,
    data.fila,
    data.capacidad,
    data.ruta,
    // , columnInicial, columnFinal, rowInicial, rowFinal
    // , ?, ?, ?, ?
    // data.columnInicial,
    // data.columnFinal,
    // data.rowInicial,
    // data.rowFinal
  ]);
columna = data.columna;
fila = data.fila;
  connection.query(query, function (err, result) {
    if (err) throw err;
    callback(result);
  });
  css = `#grid-cont {
    display: grid;
    height: 70vh;
    width: 70vw;
    background-color: white;
    border: solid black;
    grid-template-columns: repeat(`+ columna +`, 1fr);
    grid-template-rows: repeat(`+ fila +`, 1fr);
    grid-auto-flow: row;
    grid-auto-rows: auto;
  }
  `
  fs.appendFile('css/grilla/' + data.nombre + '.css',css, function (err) {
    if (err) {
      console.log("error al guardar" + err)
    } else {
    }
  })
}

function read(connection, callback) {
  connection.query("SELECT * FROM grilla", function (err, result) {
    if (err) throw err;
    console.log(result)
    callback(result);
  });
}

function buscarGrilla(connection, data, callback) {
  let Query = "SELECT * FROM grilla WHERE id = ?";
  let query = mysql.format(Query, [data.id]);
  connection.query(query, function (err, result) {
    if (err) throw err;
    callback(result);
  });
}

function update(connection, data, callback) {
  let updateQuery = "UPDATE `grilla` SET `columna`= ? ,`fila`= ?,`capacidad`= ? WHERE id = ?";
  let query = mysql.format(updateQuery, [
    data.columna,
    data.fila,
    data.capacidad,
    data.id
  ]);
  
  connection.query(query, function (err, result) {
    if (err) throw err;
    callback(result);
  });
}

function remove(c, data, callback) {
  console.log("funciona" + data)
    let removeQuery = "DELETE FROM grilla WHERE id = ?";
    let query = mysql.format(removeQuery, [data.id]);
    c.query(query, function (err, result) {
      if (err) throw err;
      callback(result);
    });
  }

module.exports = { insert, read, update, remove, buscarGrilla };
