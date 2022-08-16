const mysql = require("mysql");
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
    data.ruta
  ]);
columna = data.columna;
fila = data.fila;
  connection.query(query, function (err, result) {
    if (err) throw err;
    callback(result);
  });
  // css = `
  // #grid-cont {
  //   display: grid;
  //   height: 70vh;
  //   width: 70vw;
  //   background-color: white;
  //   border: solid black;
  //   grid-template-columns: repeat(`+ columna +`, 1fr);
  //   grid-template-rows: repeat(`+ fila +`, 1fr);
  //   grid-auto-flow: row;
  //   grid-auto-rows: auto;
  // }
  // `
  // let blob = new Blob([css], {type: 'text/css'});
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
  const randomLetters = Math.random().toString(36).substring(7);
  const newRuta = "${randomLetters}";
  let updateQuery = "UPDATE grilla SET ruta = ? WHERE id = ?";
  let query = mysql.format(updateQuery, [newRuta, data.id]);
  connection.query(query, function (err, result) {
    if (err) throw err;
    callback(result);
  });
}

function remove(connection, data, callback) {
    let removeQuery = "DELETE FROM grilla WHERE id = ?";
    let query = mysql.format(removeQuery, [data.id]);
    connection.query(query, function (err, result) {
      if (err) throw err;
      callback(result);
    });
  }

module.exports = { insert, read, update, remove, buscarGrilla };
