// Mi 1er Calculadora
let operacion = "dividir".toLowerCase();
let valor1 = 10;
let valor2 = 10;
switch (operacion) {
    case "sumar":
        console.log("EL resultado de la suma " + (valor1 + valor2));
    break;
    case "restar":
        console.log("EL resultado de la restar " + (valor1 - valor2));
    break;
    case "multiplicar":
        console.log("EL resultado de la multiplicar " + (valor1 * valor2));
    break;
    case "dividir":
        console.log("EL resultado de la dividir " + (valor1 / valor2));
    break;
    default:
        console.log("Hasta aqui aprendi");
    break;
}