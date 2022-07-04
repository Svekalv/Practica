var gridCont = document.querySelector("#grid-cont");

function function1() {
  var columna = document.getElementById("column").value;
  var fila = document.getElementById("row").value;

  for (let index3 = 0; index3 < columna; index3++) {
    for (let index4 = 0; index4 < fila; index4++) {
      let grid = document.createElement("div");
      grid.setAttribute("class", "elementoGrid");

      grid.setAttribute("id");
      //crear el id distinto a cada div y se le asigna un numero centrado y en negrita

      gridCont.append(grid);
    }
  }

  var counter = 0;
  gridCont.style.gridTemplateColumns = "repeat(" + columna + ",1fr)";
  gridCont.style.gridTemplateRows = "repeat(" + fila + ",1fr)";
}
function contador() {
  var contador1 = 0;
  var contador2 = 0;
  var contador3 = 0;
  for (let index1 = 1; index1 <= 100; index1++) {
    contador1++;
    contador2 = contador2 + 5;
    contador3 = contador3 + 10;
    if (contador1 % 2 == 0) {
      console.log(contador1);
    }
    if (contador3 % 2 == 0) {
      console.log(contador3);
    }
    if (contador2 % 2 == 0) {
      console.log(contador2);
    }
  }
}
