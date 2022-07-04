function determinar(){
    var horaActual = document.getElementById("hora").value
    if (horaActual <= 12){
        document.write("am")
    }
    else
        document.write("pm")
}