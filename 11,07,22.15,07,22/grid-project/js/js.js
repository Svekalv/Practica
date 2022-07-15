var gridCont = document.querySelector("#grid-cont");
var elementoGrid = document.getElementsByClassName("elementoGrid");
var fila = 2;
var columna = 2;
var listaCelda = new Map();
var listaSeleccionada = new Map();
var columnInicial = 0;
var columnFinal = 0;
var arrayColumn = new Map();
var arrayRow = new Map();
var rowInicial = 0;
var rowFinal = 0;
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
        document.write("valor no aceptable");
      } else {
        let camara = document.createElement("div");
        camara.setAttribute("class", "elementoGrid");
        camara.setAttribute("id", numeroCamara);
        camara.setAttribute("column", i);
        camara.setAttribute("row", x);
        camara.onmousedown = function (event) {
          mousedown(this);
        };
        camara.onmouseup = function (event) {
          mouseup(this);
        };
        listaCelda.set("id", numeroCamara);
        listaCelda.set("column", i)
        listaCelda.set("row", x)
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
  arrayColumn.set("column ", columnInicial)
  arrayRow.set("row ", rowInicial)
  listaSeleccionada.set("id ", objecto.id);
  listaSeleccionada.set("column ", columnInicial)
  listaSeleccionada.set( "row ", rowInicial)
  
  console.log(listaSeleccionada);
}

function mouseup(objecto) {
  columnFinal = objecto.getAttribute("column");
  rowFinal = objecto.getAttribute("row");
  arrayColumn.set("column ", columnFinal)
  arrayRow.set("row " ,rowFinal)
  listaSeleccionada.set("id ",objecto.id);
  listaSeleccionada.set("column ", columnFinal)
  listaSeleccionada.set("row ", rowFinal)
  console.log(listaSeleccionada);
  seleccionGrilla();
}
function seleccionGrilla() {
  console.log("listaCelda: " + Object.values(listaCelda));
  console.log("listaSeleccionada: " + Object.values(listaSeleccionada));
  for (columnInicial; columnInicial < columnFinal; columnInicial++) {
    for (rowInicial; rowInicial < rowFinal; rowInicial++);
    let difference = Object.values(listaCelda).filter((x) => Object.values(listaSeleccionada).includes(x));


    console.log(difference);
  }
}
