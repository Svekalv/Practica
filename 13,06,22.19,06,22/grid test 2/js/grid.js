
var gridContenedor = document.querySelector('#contenedor-grid') 
for (let index = 0; index < 25; index++) { 
    let gridItem = document.createElement('div')
    gridItem.setAttribute('id',index+1)
    gridItem.setAttribute('class','gridItem')
    console.log(gridItem)
    gridContenedor.append(gridItem)
}
