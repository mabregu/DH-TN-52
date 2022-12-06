// Mensaje con datos del usuario
/**
el switch verifica muchas mas cosas que un if... el callback es una funcion como parametro dentro de otra funcion
Carne a la parrilla: $1800
○ Pollo: $1500
○ Vegetariana: $1200
○ Queso = $25
○ Salsa de tomate = $5
○ Mayonesa = $5
○ Mostaza = $5
○ Tomate = $15

3

○ Lechuga = $10
○ Cebolla = $10
$1905
*/
let totalAPagar = (tipo, jamon, queso, salsa, mayonesa, mostaza, tomate, lechuga, cebolla) => {
    let total = 0;
    
    switch (tipo) {
        case "Carne":
            total += 1800;
            break;
        case "Pollo":
            total += 1500;
            break;
        case "Vegetariana":
            total += 1200;
        break;
    
        default:
            return "no la tenemos ):";
        break;
    }
    
    jamon ? total += 30 : total += 0;
    queso ? total += 25 : total += 0;
    salsa ? total += 5 : total += 0;
    mayonesa ? total += 5 : total += 0;
    mostaza ? total += 5 : total += 0;
    tomate ? total += 15 : total += 0;
    lechuga ? total += 10 : total += 0;
    cebolla ? total += 10 : total += 0;
    
    return total;
}

function mensaje(nombreUsuario, apellidoUsuario, tipo, jamon, queso, salsa, mayonesa, mostaza, tomate, lechuga, cebolla, callback) {
    return "Estimado " + nombreUsuario + " " + apellidoUsuario + " el monto a pagar $" + callback(tipo, jamon, queso, salsa, mayonesa, mostaza, tomate, lechuga, cebolla);
}

console.log(mensaje("Rocko", "Rockito", "Carne", true, false, true, true, true, true, true, false, totalAPagar));