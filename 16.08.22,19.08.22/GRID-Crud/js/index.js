const contenedor = document.querySelector("#datos")
inicio();
function inicio () {
  let resultados =''
  document.getElementById("#id")
  document.getElementById("#nombre")
  document.getElementById("#columnas")
  document.getElementById("#filas")
  document.getElementById("#rutas")
  fetch('/read', {
    method: 'GET',
  }).then(r =>  r.json().then(data => ({status: r.status, body: data}))).then(obj => 
    Object.values(obj.body).forEach(datos => {
      resultados += 
      `<tr id="tr-${datos.id}">
      <td>${datos.id}</td>
      <td>${datos.nombre}</td>
      <td>${datos.columna}</td>
      <td>${datos.fila}</td>
      <td>${datos.ruta}</td>
      <td>
          <a type="button" href="/edit_grilla.html?datos=${datos.id}?${datos.nombre}?${datos.columna}?${datos.fila}" class="btn btn-primary"><i class="fas fa-edit"></i></a>
          <a type="button" onClick="eliminar(${datos.id})" class="btn btn-primary"><i class="fas fa-trash-alt"></i></a>
      </td>
      </tr>
      `
      contenedor.innerHTML = resultados
    })
  );
}
function eliminar(id){
  const registro = {id};
  const trow = document.getElementById("tr-" + id)
    fetch('/remove', {
      method: 'POST',
    })
    trow.remove();
  }
function buscarGrilla(id, nombre, columna, fila){
  console.log(id, nombre, columna, fila)
  var url = new URLSearchParams();
  url.append("id", id)
  url.append("nombre", nombre)
  url.append("columna", columna)
  url.append("id", id, "nombre", nombre, "columna", columna, "fila", fila)
  window.r("/edit_grilla.html?" + url.toString())
}
