const mysql = require("mysql");



// function insert (con, nombre , columna , fila , capacidad, ruta){
//   var _nombre = nombre.data
// console.log(_nombre)
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "INSERT INTO grilla (nombre, columna, fila, capacidad, ruta) VALUES ('"+ nombre +"', ''"+ columna +"'', ''"+ fila +"'', ''"+ capacidad +"'', ''"+ ruta +"'')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
// });
// }









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
  connection.query(query, function (err, result) {
    if (err) throw err;
    callback(result);
  });
}

function read(connection, callback) {
  connection.query("SELECT * FROM grilla", function (err, result) {
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

module.exports = { insert, read, update, remove };
