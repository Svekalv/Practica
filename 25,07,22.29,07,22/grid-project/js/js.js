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
    Object.values(elementoGrid).forEach(div => {
      if (columnInicial == parseInt(div.getAttribute("column"))) {
        arrayColumna.push(div);
      }
    });
  }
  for (rowInicial; rowInicial <= rowFinal; rowInicial++) {
    Object.values(elementoGrid).forEach(div => {
      if (rowInicial == parseInt(div.getAttribute("row"))) {
        arrayFila.push(div);
      }
    });
  }
  intersection = arrayColumna.filter((x) => arrayFila.includes(x));
  Object.values(intersection).forEach(div => {
    div.style.backgroundColor = "blue";
    var valores = div.getAttribute("id")
  });
  let createPost = () => {
    posts.innerHTML += `
    <div>
      <p>${data.text}</p>
      <span class="options">
        <i onClick="editPost(this)" class="fas fa-edit"></i>
        <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
      </span>
    </div>
    `;
    input.value = "";
  };
  let acceptData = () => {
    // Other codes are here
  
    createPost();
  };
  let deletePost = (e) => {
    e.parentElement.parentElement.remove();
  };
  let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
  };
  let deleteTask = (e) => {
    e.parentElement.parentElement.remove();
  
    data.splice(e.parentElement.parentElement.id, 1);
  
    localStorage.setItem("data", JSON.stringify(data));
  
    console.log(data);
  };
    //validacion
    
    //donde guardar
    
    //elementos dentro del grid element
    
  console.log(arrayColumna);
  console.log(arrayFila);
  console.log(intersection);
}