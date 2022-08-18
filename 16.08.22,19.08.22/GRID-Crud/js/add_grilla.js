var gridCont = document.querySelector("#grid-cont");
var elementoGrid = document.getElementsByClassName("elementoGrid");
var fila = 2;
var columna = 2;
var listaCelda = {};
var listaSeleccionada = {};
var columnInicial = 0;
var columnFinal = 0;
var arrayColumn = {};
var arrayRow = {};
var rowInicial = 0;
var rowFinal = 0;
var nombre;

recorrer();

function seleccionar() {
  columna = document.getElementById("column").value;
  fila = document.getElementById("row").value;
  recorrer();
}
function recorrer() {
  var numeroCamara = 1;
  document
    .querySelectorAll(".elementoGrid")
    .forEach((elementoGrid) => elementoGrid.remove());
  for (let i = 0; i < columna; i++) {
    for (let x = 0; x < fila; x++) {
      if (i < 0) {
      } else {
        let camara = document.createElement("div");
        camara.setAttribute("class", "elementoGrid");
        camara.setAttribute("id", numeroCamara);
        camara.setAttribute("column", x);
        camara.setAttribute("row", i);
        camara.onmousedown = function (event) {
          mousedown(this);
        };
        camara.onmouseup = function (event) {
          mouseup(this);
        };
        gridCont.append(camara);
        numeroCamara++;
      }
    }
    gridCont.style.gridTemplateColumns = "repeat(" + columna + ",1fr)";
    gridCont.style.gridTemplateRows = "repeat(" + fila + ",1fr)";
  }
}
function mousedown(objecto) {
  columnInicial = objecto.getAttribute("column");
  rowInicial = objecto.getAttribute("row");
  arrayColumn.column = columnInicial;
  arrayRow.row = rowInicial;
  listaSeleccionada.idinicial = objecto.id;
  listaSeleccionada.columninicial = columnInicial;
  listaSeleccionada.rowinicial = rowInicial;
}
function mouseup(objecto) {
  columnFinal = objecto.getAttribute("column");
  rowFinal = objecto.getAttribute("row");
  arrayColumn.column = columnFinal;
  arrayRow.row = rowFinal;
  listaSeleccionada.idfinal = objecto.id;
  listaSeleccionada.columnfinal = columnFinal;
  listaSeleccionada.rowfinal = rowFinal;
  seleccionGrilla();
}
function seleccionGrilla() {
  let arrayColumna = [];
  let arrayFila = [];
  let intersection = [];
  columnInicial = parseInt(columnInicial);
  columnFinal = parseInt(columnFinal);
  rowInicial = parseInt(rowInicial);
  rowFinal = parseInt(rowFinal);
  console.log("columnInicial " + columnInicial);
  console.log("columnFinal " + columnFinal);
  console.log("rowInicial " + rowInicial);
  console.log("rowFinal " + rowFinal);
  for (columnInicial; columnInicial <= columnFinal; columnInicial++) {
    Object.values(elementoGrid).forEach((div) => {
      if (columnInicial == parseInt(div.getAttribute("column"))) {
        arrayColumna.push(div);
      }
    });
  }
  for (rowInicial; rowInicial <= rowFinal; rowInicial++) {
    Object.values(elementoGrid).forEach((div) => {
      if (rowInicial == parseInt(div.getAttribute("row"))) {
        arrayFila.push(div);
      }
    });
  }
  intersection = arrayColumna.filter((x) => arrayFila.includes(x));
  Object.values(intersection).forEach((div) => {
    div.style.backgroundColor = "blue";
    var valores = div.getAttribute("id");
  });

  console.log(arrayColumna);
  console.log(arrayFila);
  console.log(intersection);
}

function verificarNombre() {
  fetch("/read", {
    method: "GET",
  })
    .then((r) => r.json().then((data) => ({ status: r.status, body: data })))
    .then((obj) =>
      Object.values(obj.body).forEach((datos) => {
        let nombreRegistrado = datos.nombre;
        console.log(nombreRegistrado)
        nombre = document.getElementById("nombre").value;
        if (nombre == nombreRegistrado) {
          Swal.fire({
            title: "ERROR",
            text: "Nombre ya registrado",
            icon: "error",
          }).then((resultado) => {
            if (resultado.value) {
              nombre = "";
            }
          });
        } else {
          guardar();
        }
      })
    );
}

function guardar() {
  nombre = document.getElementById("nombre").value;
  // let columna = parseInt(columna);
  // let fila = parseInt(fila);
  let capacidad = parseInt(columna) * parseInt(fila);
  let ruta = "../css/grilla/" + nombre + ".css";
  const registro = {
    nombre,
    columna,
    fila,
    capacidad,
    ruta,
  };
  let mensaje = JSON.stringify(registro);
  console.log(mensaje);
  Swal.fire({
    text: "Nueva grilla registrada",
    icon: "success",
  }).then(function () {
    window.location = "/index.html";
  });

  fetch("/guardar", {
    method: "POST",
    body: JSON.stringify(registro),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}
