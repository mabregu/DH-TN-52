// Concesionaria
const autosImportados = require("./autos");
const concesionaria = {
    autos: autosImportados,
    buscarAuto: function (patente) {
        return this.autos.find(auto => auto.patente === patente) || null;
    },
    venderAuto: function (patente) {
        const auto = this.buscarAuto(patente);
        if (auto) {
            auto.vendido = true;
        }
        
        return auto;
    },
    autosParaLaVenta: function () {
        return this.autos.filter(auto => !auto.vendido);
    },
    autosNuevos: function () {
        return this.autosParaLaVenta().filter(auto => auto.km < 100);
    },
    listaDeVentas: function () {
        return this.autosParaLaVenta().map(auto => auto.precio);
    },
    totalDeVentas: function () {
        return this.listaDeVentas().reduce((total, precio) => total + precio, 0);
    },
    puedeComprar: function (auto, persona) {
        return auto.precio <= persona.capacidadDePagoTotal && auto.precio / auto.cuotas <= persona.capacidadDePagoEnCuotas;
    },
    autosQuePuedeComprar: function (persona) {
        return this.autosParaLaVenta().filter(auto => this.puedeComprar(auto, persona));
    }
}

// console.log(concesionaria.buscarAuto("APL123"));
// console.log(concesionaria.venderAuto("APL123"));
// console.log(concesionaria.autosParaLaVenta());
// console.log(concesionaria.autosNuevos());
// console.log(concesionaria.listaDeVentas());
// console.log(concesionaria.totalDeVentas());
// console.log(
//     concesionaria.puedeComprar(concesionaria.autos[0], {
//         nombre: "Juan",
//         capacidadDePagoEnCuotas: 20000,
//         capacidadDePagoTotal: 100000
//     })
// );
console.log(
    concesionaria.autosQuePuedeComprar({
        nombre: "Juan",
        capacidadDePagoEnCuotas: 20000,
        capacidadDePagoTotal: 100000
    })
);