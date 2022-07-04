function calcular(){
    var fibonacci = document.getElementById("fibonacci").value
    var arr = [];
    var suma = 0;
    for (let index = 0; index < fibonacci; index ++) {
        if (index<2){
            arr.push(index)
        }else{
            suma = arr[index-2]+arr[index-1]
            arr.push(suma)
        }
        
    }
    
    console.log (arr)
}