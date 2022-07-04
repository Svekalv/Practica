// var sum=0
// for (let i = 4; i < 8; i++) {
//     if (i == 6){
//         continue
//     }
//     sum +=i

// }
// document.write (sum)

// var x = 0;
// while(x<6){
//     x++;
// //     document.write(x + " ")
//     switch(x){
//         case 1:
//             break;
//         case 2:
//             break;
//     }
// }

// x = 2.45
// y = 2.49
// if (x<y){
//     console.log("new record")
// }
// else {
//     console.log("not this time")
// }

// determinar la cantidad de dias necesarios para cumplir 31 unidades de distancia
function caracol() {
  var distanciaPozo = document.getElementById("numero").value;
  var distanciaRecorrida = 0;
  var dia = 0; 
  var piesHora = 5 / 24;
  var totalHoras = 0;
//   console.log(resultado);
  while (distanciaRecorrida <= distanciaPozo) {
    distanciaRecorrida = distanciaRecorrida + piesHora;
    totalHoras++;
    if (totalHoras % 24 == 0) {
      dia++;
      document.write("dia " + dia + ": " + distanciaRecorrida);
    }
    
  }document.write("distancia recorrida: " + distanciaRecorrida + " total dias: " + dia)
}
