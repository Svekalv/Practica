var gridCont = document.querySelector("#grid-cont");
var elementoGrid = document.getElementsByClassName("elementoGrid");
var textnombre = document.getElementById("nombre");
var inputcolumn = document.getElementById("column");
var inputrow = document.getElementById("row");
var id;
var nombre;
var columna;
var fila;
var listaCelda = {};
var listaSeleccionada = {};
var columnInicial = 0;
var columnFinal = 0;
var arrayColumn = {};
var arrayRow = {};
var rowInicial = 0;
var rowFinal = 0;

buscarGrilla();
tituloNombre();
seleccionar();

function buscarGrilla() {
  var parameters = new URLSearchParams(window.location.search);
  var datos = parameters.get("datos").split("?");
  id = datos[0];
  nombre = datos[1];
  columna = datos[2];
  fila = datos[3];
  // columnInicial = datos[4]
  // columnFinal = datos[5]
  // rowInicial = datos[6]
  // rowFinal = datos[7]
  textnombre.value = nombre;
  inputcolumn.value = columna;
  inputrow.value = fila;
}

function tituloNombre() {
  var titulo = document.getElementById("titulo");
  titulo.innerHTML = nombre;
}

function seleccionar() {
  columna;
  fila;
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
}

function actualizar() {
  let nombre = document.getElementById("nombre").value;
  columna = document.getElementById("column").value;
  fila = document.getElementById("row").value;
  let capacidad = parseInt(columna) * parseInt(fila);
  let ruta = "../css/grilla/" + nombre + ".css";
  const registro = {
    columna,
    fila,
    capacidad,
    id,
  };
  let mensaje = JSON.stringify(registro);
  Swal.fire("Grilla modificada").then(function () {
    window.location = "/index.html";
  });
  fetch("/update", {
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
