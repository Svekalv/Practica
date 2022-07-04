//seleccionar div contenedor
//generar el for para crear la lista de elementos en la maqueta
//ya creados los elementos , crear una aclse para la manipulacion
//agragar elementos creados al div contenedor
var gridObjeto = document.querySelector('#contenedor-grid');
console.log("gridObjeto ",gridObjeto)
for (let index = 0; index < 28; index++) {
    let grilla = document.createElement('div')
    console.log("grilla ", grilla)
    grilla.setAttribute('class', 'gridElement');
    gridObjeto.append(grilla)
}
