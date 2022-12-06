// file system
// json
const importar = require('./collectibles');

let hotToys = importar("Hot Toys");
let bandai = importar("Bandai");
let starWars = importar("Star Wars");

let unifiedCollectibles = [...hotToys, ...bandai, ...starWars];

let collectibles = {
    figuras: unifiedCollectibles,
    listFigures: function () {
        this.figuras.forEach(figura => {
            console.log("La figura", figura.nombre);
        })
    },
    figuresByBrand: function (marca) {
        let figurasElegidas = this.figuras.filter(figura => {
            return figura.marca == marca
        });
        
        return figurasElegidas;
    }
}

console.log(
    collectibles.figuresByBrand("Hot Toys")
);