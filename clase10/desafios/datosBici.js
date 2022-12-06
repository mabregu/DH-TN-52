const fs = require('fs');

let datos = fs.readFileSync(__dirname + '/bicicletas.json', 'utf-8');

let bicicletasArray = JSON.parse(datos);

module.exports = bicicletasArray;