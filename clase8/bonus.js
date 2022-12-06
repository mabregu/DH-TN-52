// encontrar el numero (arrNum, num)
//El número XX sí existe en el array”.//“El valor solicitado no existe”.
function encontrarElNumero(arrNum, num) {
    if (arrNum.indexOf(num) != -1) {
        return `El numero esta ${num}`
    } else {
        return `El numero solicitado no esta ${num}`
    }
}
//console.log(encontrarElNumero([1, 3, 6, 80], 95));
let opciones = ["Toma 1", "Toma 2", "Pon 1", "Pon 2", "Todos ponen", "Toma todo"];
function juegoDeTrompito(opciones, vueltas) {
    let random = Math.floor(Math.random() * vueltas)
    
    return opciones[random];
}
//console.log(juegoDeTrompito(opciones, 2));