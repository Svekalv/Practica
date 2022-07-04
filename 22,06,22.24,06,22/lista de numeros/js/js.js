function ingresar() {
  var numero = document.getElementById("numeroIngresado").value;
  var impares = [];
  var primos = [];
  var noprimos = [];
  for (let i = 1; i < numero; i++) {
    if (i % 2 == 1) {
      impares.push(i);
      let text = impares.toString();
      document.getElementById("impares").innerHTML = text;
    }
    if (
      numero % 2 != 0 ||
      numero % 3 != 0 ||
      numero % 5 != 0 ||
      numero % 7 != 0 ||
      numero % 11 != 0
    ) {
      noprimos.push(i);
      let text = noprimos.toString();
      document.getElementById("noPrimos").innerHTML = text;
    } else {
      primos.push(i);
      let text = primos.toString();
      document.getElementById("primos").innerHTML = text;
    }
  }
}
