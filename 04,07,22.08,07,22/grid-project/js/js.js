var gridCont = document.querySelector("#grid-cont");
var elementoGrid = document.getElementsByClassName("elementoGrid");
let drag = false;

function determinar() {}
function seleccionar() {
  gridCont.addEventListener("input", seleccionar);
  var gridItem = document
    .querySelectorAll(".elementoGrid")
    .forEach((elementoGrid) => elementoGrid.remove());
  var columna = document.getElementById("column").value;
  var fila = document.getElementById("row").value;
  var n = 1;
  for (let i = 0; i < columna; i++) {
    for (let x = 0; x < fila; x++) {
      if (i < 0 ){
        document.write("valor no aceptable")
      }else {
      let grid = document.createElement("div");
      grid.setAttribute("class", "elementoGrid");
      grid.setAttribute("id", "numero-" + n);
      gridCont.append(grid);
      n++;}
    }
  }
  gridCont.style.gridTemplateColumns = "repeat(" + columna + ",1fr)";
  gridCont.style.gridTemplateRows = "repeat(" + fila + ",1fr)";
  Object.values(elementoGrid).forEach((div) => {
    div.onmousedown = function () {
      drag = false;
      div.style.background = "blue";
      // document.getElementById("experiment").addEventListener('click', click_handler, false);
    };
    div.onmousemove = function (e) {
      drag = true;
      var xCoords = e.movementX;
      var yCoords = e.movementY;
      var ubicacion = "X coords => " + xCoords + " ,Y coords = " + yCoords;
      console.log(ubicacion);
    };
    div.onmouseup = function () {
      console.log(drag ? "drag" : "click");
    };
  });
}

// var elementoGrid = document.querySelectorAll(".elementoGrid");

// Array.from(elementoGrid).forEach((v) =>
//   v.addEventListener(('mousedown', () => drag = false), function () {
//     v.style.background = "blue";
//   })
// );
// document.addEventListener(
//     'mousemove', () => {
//       drag = true
// document.addEventListener(
// 'mouseup', () => console.log(
//     drag ? 'drag' : 'click'));
//         document.querySelector().forEach((v))
//         v.style.background = "blue";
//     } );

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
