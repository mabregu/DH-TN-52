// array con op bancarias (posoitivos y negativos)
// callback
// function (/nombre, apeliido, saldo)
const operacionesBancarias = [1000, 2500, 3000, -1500];

function calcularSaldo(operaciones) {
    let depositos = 0;
    let retiros = 0;
    
    for (let index = 0; index < operaciones.length; index++) {
        if (operaciones[index] > 0) {
            // deposito
            depositos += operaciones[index];
        } else {
            // retiro
            retiros += operaciones[index];
        }
    }
    
    return [
        depositos,//0
        retiros,//1
        depositos + retiros//2
    ];
}

function estadoDeCuenta(nombre, apellido, operaciones, callback) {
    let saldo = callback(operaciones)
    
    return `Resumen de ${nombre} ${apellido} su saldo es ${saldo[2]}. Pero ademas tengo depositos ${saldo[0]} y queres mas? toma ${saldo[1]}`;
}

console.log( estadoDeCuenta("Rocko", "Rocio", operacionesBancarias, calcularSaldo) );