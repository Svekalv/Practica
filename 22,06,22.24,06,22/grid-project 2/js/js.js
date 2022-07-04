var gridCont = document.querySelector("#grid-cont");
function seleccionar(){
  var gridItem = document.querySelectorAll(".elementoGrid").forEach(elementoGrid => elementoGrid.remove());
  var columna = document.getElementById("column").value;
  var fila = document.getElementById("row").value;
  var n = 1
  for (let i = 0; i < columna; i++) {
    for (let x = 0; x < fila; x++) {
      let grid = document.createElement("div");
      grid.setAttribute("class", "elementoGrid");
      grid.setAttribute("id" , "numero-" + n);
      gridCont.append(grid);
      n++
    }
  }
  gridCont.style.gridTemplateColumns = "repeat(" + columna + ",1fr)"
  gridCont.style.gridTemplateRows = "repeat(" + fila + ",1fr)"
}

