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
        (listaCelda.id = numeroCamara),
          (listaCelda.column = i),
          (listaCelda.row = x);
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
  Object.values(elementoGrid).forEach((div) => {
      for (columnInicial; columnInicial < columnFinal; columnInicial++) {
        arrayColumna.push(div.id);
        for (rowInicial; rowInicial < rowFinal; rowInicial++);
        {
          arrayFila.push(div.id);
        }
      }
      arrayColumna.filter((x) => arrayFila.includes(x)); 
      div.style.backgroundColor = "blue";
  });
}

//   console.log(intersection)
// }

// let divin = document.getElementById(listaSeleccionada.idinicial);
// let divfin = document.getElementById(listaSeleccionada.idfinal);
// let divlado1 = document.getElementById(listaSeleccionada.id);
// let divlado2 = document.getElementById(listaSeleccionada.id);
// divin.style.backgroundColor = "blue";
// divfin.style.backgroundColor = "blue";
// divlado1.style.backgroundColor = "blue";
// divlado2.style.backgroundColor = "blue";
// if (listaCelda.column == listaSeleccionada.columninicial)
// {
//   divin.style.backgroundColor = "blue";
// }
// else if(listaCelda.column == listaSeleccionada.columnfinal)
// {
//   columnFinal.style.backgroundColor = "blue";
// }
// else if(listaCelda.row == listaSeleccionada.rowinicial)
// {
//   divin.style.backgroundColor = "blue";
// }
// else if(listaCelda.row == listaSeleccionada.rowfinal)
// {
//   rowFinal.style.backgroundColor = "blue";
// }
