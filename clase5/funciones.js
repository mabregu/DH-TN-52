// Funciones declaradas
function suma(a, b) {
    return a + b;
}
console.log("sumar", suma(2, 3));

// Funciones expresadas
let resta = function (a, b) {
    return a - b;
}
console.log("restar", resta(2, 1));

// Funciones flecha
let multiplicacion = (a, b) => a * b;
console.log("multiplicacion", multiplicacion(2, 4));

let division = (a, b) => {
    if (b === 0) {
        return "No se divide por cero";
    }
    
    return a / b;
}
console.log("division", division(2, 0));
// Callbacks
// Operacion => es nuestro callbacks
function calculadora(a, b, operacion) {
    return operacion(a, b);
}

console.log("Calculo", calculadora(2, 2));