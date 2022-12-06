// Pago Mes
// Consumo kwh
// mas de 300 se incrementa un 20 por ciento, sino sin aumento
// Debido a q su hogar tuvo un consumo reee
let pagoMes = 12000;
let consumoKwh = 450;
let porcentajeAumento = 1.20;
let limiteDeConsumo = 300;
let resultado = consumoKwh < limiteDeConsumo ? "Debido a q su hogar tuvo un consumo reee " + consumoKwh + "Kwh, por mes tendrán un aumento del 20% cumplimos con informarle que se ha ajustado el total a pagar, que será de $" + (pagoMes * porcentajeAumento) : "con subsidio";

console.log(resultado);