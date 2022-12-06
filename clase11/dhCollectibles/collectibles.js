// Modulo para acceder a mis archivos
const fs = require('fs');
function importar(marca) {
    
    let nombreArchivo = "";
    
    switch (marca) {
        case "Hot Toys":
            nombreArchivo = "figuras1.json"
        break;

        case "Bandai":
            nombreArchivo = "figuras2.json"
        break;

        case "Star Wars":
            nombreArchivo = "figuras3.json"
        break;
    }
    
    let figuras = JSON.parse(
        fs.readFileSync("./datos/" + nombreArchivo, 'utf-8')
    )
    
    return figuras;
}

// console.log("importar", importar("Star Wars"));

module.exports = importar;