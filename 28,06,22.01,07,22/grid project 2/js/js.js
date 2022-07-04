function function1() {
  var flexCont = document.querySelector("#flex-container");
//   console.log(flexCont)
  var flexItem = document.querySelectorAll(".flexElement").forEach(flexElement => flexElement.remove());

  var columna = document.getElementById("column").value;
  var fila = document.getElementById("row").value;
//   console.log("columna " + columna + " filas " + fila)
  var n = 1;
  for (let i = 0; i < columna; i++) {
    for (let x = 0; x < fila; x++) {
      let flex = document.createElement("div");
      flex.setAttribute("class", "flexElement");
      flex.setAttribute("id", "numero-" + n);
    //   console.log(flex)
      flexCont.append(flex);
      n++;
    }
  }
}
