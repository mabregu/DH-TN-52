// Monto por alquiler de vehiculo
// parametros tipovehiculo, dias, silla
// compacto 14000
// mediano 17000
// camioneta 28000
// silla 1200 por dia
function montoAPagar(tipoVehiculo, diasAlquiler, sillaBebe) {
    let valorCompactoPorDIa = 14000;
    let valorMedianoPorDIa = 17000;
    let valorCamionetaPorDIa = 28000;
    let sillaB = 1200;
    let total = 0;
    
    switch (tipoVehiculo) {
        case "Compacto":
            total = valorCompactoPorDIa * diasAlquiler;
        break;
        
        case "Mediano":
            total = valorMedianoPorDIa * diasAlquiler;
        break;
        
        case "Camioneta":
            total = valorCamionetaPorDIa * diasAlquiler;
        break;
    
        default:
            return "Tipo no valido";
        break;
    }
    
    if (sillaBebe) {
        total = total + (sillaB * diasAlquiler);
        return "Estimado cliente: en base al tipo de vehículo " + tipoVehiculo + " alquilado, considerando los " + diasAlquiler + " días utilizados y la silla para bebé, el monto total a pagar es de $" + total;
    }
    
    return "Estimado cliente: en base al tipo de vehículo " + tipoVehiculo + " alquilado, considerando los " + diasAlquiler + " días utilizados el monto total a pagar es de $" + total;
}

console.log("El alquiler se fue a las nubes", montoAPagar("Mediano", 10, true), "\n");