var gridCont = document.querySelector("#grid-cont");
var elementoGrid = document.getElementsByClassName("elementoGrid");
let drag = false;
var fila = 2;
var columna = 2;
var Array = [];
var div = document.getElementById("select"),
  x1 = 0,
  y1 = 0,
  x2 = 0,
  y2 = 0;
recorrer();
color();
function seleccionar() {
  //   gridCont.addEventListener("input", seleccionar);
  columna = document.getElementById("column").value;
  fila = document.getElementById("row").value;
  recorrer();
  color();
}
function recorrer() {
  var n = 1;
  var gridItem = document
    .querySelectorAll(".elementoGrid")
    .forEach((elementoGrid) => elementoGrid.remove());
  for (let i = 0; i < columna; i++) {
    for (let x = 0; x < fila; x++) {
      if (i < 0) {
        document.write("valor no aceptable");
      } else {
        let grid = document.createElement("div");
        grid.setAttribute("class", "elementoGrid");
        grid.setAttribute("id", "numero-" + n);
        gridCont.append(grid);
        n++;
      }
    }
    gridCont.style.gridTemplateColumns = "repeat(" + columna + ",1fr)";
    gridCont.style.gridTemplateRows = "repeat(" + fila + ",1fr)";
  }
}
function selectionArea() {
  var x3 = Math.min(x1, x2);
  var x4 = Math.max(x1, x2);
  var y3 = Math.min(y1, y2);
  var y4 = Math.max(y1, y2);
  div.style.left = x3 + "px";
  div.style.top = y3 + "px";
  div.style.width = x4 - x3 + "px";
  div.style.height = y4 - y3 + "px";
}
function color() {
  var elementoGrid = document.getElementsByClassName("elementoGrid");
  Object.values(elementoGrid).forEach((div) => {
    div.onmousedown = function (e) {
      div.hidden = 0;
      x1 = e.clientX;
      y1 = e.clientY;
      selectionArea();
      // drag = false;
      let ranges = [];
      sel = window.getSelection();
      for (let i = 0; i < sel.rangeCount; i++) {
        ranges[i] = sel.getRangeAt(i);
        Array.push(div.id)
      }
      div.style.background = "blue";
      console.log(ranges);
    };
    div.onmousemove = function (e) {
      x2 = e.clientX;
      y2 = e.clientY;
      selectionArea();
      // drag = true;
    };
    div.onmouseup = function () {
      div.hidden = 1;
      // console.log(drag ? "drag" : "click");
    };
  });
}
// Array.push(div.id)

// console.log("grilla seleccionada")

// https://es.javascript.info/mousemove-mouseover-mouseout-mouseenter-mouseleave

// var elementoGrid = document.querySelectorAll(".elementoGrid");

// Array.from(elementoGrid).forEach((v) =>
//   v.addEventListener('mousedown', () => drag = false, function (event) {
//     document.addEventListener('selectionchange', onSelectionChange);
//     v.style.background = "blue";
//   })
// )
// Array.from(elementoGrid).forEach((v) =>
//   v.addEventListener('mousemove', () => drag = true, function (event) {
//     document.removeEventListener('selectionchange', onSelectionChange);
//     v.style.background = "white";
//   })
// // )
// function onSelectionChange (event) {}
