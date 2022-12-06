// Objects
let auto = {
    color: 'negro',
    marca: 'Fiat',
    modelo: 'Punto',
    arrancar: function () {
        return 'Vroom!'
    },
    detenerse: function () {
        return 'kpuff'
    },
    queMarcaEs: function () {
        return this.marca
    }
}

module.exports =  auto;