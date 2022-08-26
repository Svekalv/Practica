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
var validador = 0;

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
    // // var element = document.getElementById("myDIV");
    // valores.classList.add("seleccion");

  });

  // var claseDiv = 
  //   columnInicial,
  //   columnFinal,
  //   rowInicial,
  //   rowFinal;

  // var nombreArray = [
  //   { nombre: 1, valor: claseDiv },
  //   { nombre: 2, valor: claseDiv },
  //   { nombre: 3, valor: claseDiv },
  // ];

  console.log(arrayColumna);
  console.log(arrayFila);
  console.log(intersection);
}

function verificarNombre() {
  fetch("/read", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((json) => {
      if (json.length === 0) {
        guardar();
      } else {
        json.forEach((obj) => {
          nombre = document.getElementById("nombre").value;
          validador = nombre.localeCompare(obj.nombre);
          if (validador === 0) {
            return;
          }
        });
        if (validador === 0) {
          Swal.fire({
            title: "ERROR",
            text: "Nombre ya registrado",
            icon: "error",
          });
        } else {
          guardar();
        }
      }
    });
}

function guardar() {
  // console.log(columnInicial)
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
    // columnInicial,
    // columnFinal,
    // rowInicial,
    // rowFinal,
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
