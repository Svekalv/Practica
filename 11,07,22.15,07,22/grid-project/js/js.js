var gridCont = document.querySelector("#grid-cont");
var elementoGrid = document.getElementsByClassName("elementoGrid");
let drag = false;
var fila = 2;
var columna = 2;
var Array = []
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
function color(){
  var elementoGrid = document.getElementsByClassName("elementoGrid");
  Object.values(elementoGrid).forEach((div) => {
    
  div.onmousedown = function (e) {
    drag = false;
    Array.push(div.id)
    div.style.background = "blue";
    // document.getElementById("experiment").addEventListener('click', click_handler, false);
    var xCoords = e.movementX;
    var yCoords = e.movementY;
    var ubicacion = "X coords => " + xCoords + " ,Y coords = " + yCoords;
  };
  div.onmousemove = function () {
    drag = true;
    // console.log(ubicacion);
  };
  div.onmouseup = function () {
    console.log(drag ? "drag" : "click");
    console.log(Array);
  };
})
}  


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
