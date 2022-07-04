// determinar la cantidad de dias necesarios para cumplir 31 unidades de distancia
function calcularDia() {
  var distanciaPozo = document.getElementById("numero").value;
  var totalHoras = 0;
  var piesHora = 5/24;
  var dia = 0;
  var distanciaRecorrida = 0;
  for (distanciaRecorrida; distanciaRecorrida <= distanciaPozo; totalHoras++) {
    if (totalHoras % 24 == 0) {
      dia++;
      distanciaRecorrida = distanciaRecorrida + piesHora;
    console.log("distancia recorrida: " + distanciaRecorrida + " total dias: " + dia)
    }
  }
}
