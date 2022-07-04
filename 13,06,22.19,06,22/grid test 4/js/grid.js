function seleccionar() {
  //a continuacion se declara la variable grid container la cual se obtine por id
  var gridContainer = document.querySelector("#grid-container");
  // a continuacuion se obtiene elos valores de los imputs de la columna por id y filas de la misma manera
  let columna = document.getElementById("columna").value;
  let fila = document.getElementById("fila").value;
  // comence un ciclo for loop con los valores obtenidos en el paso anterior
  for (let index1 = 0; index1 < columna; index1++) {
    for (let index2 = 0; index2 < fila; index2++) {
        //aca declare la varible grilla que crea el elemento div y los atributos clase con su nombre de clase  grid element
      let grilla = document.createElement("div");
      grilla.setAttribute("class", "gridElement");
      gridContainer.append(grilla)
    }
  }
}
// var gridObject = document.querySelector('#grid-container')
