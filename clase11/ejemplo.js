// Desestructurazion de arrays
let series = ['Game of Thrones', 'Breaking bad', 'Friends'];

let [serie1, , friends] = series;

// console.log(serie1);
// console.log(serie2);
// console.log(friends);

// Desestructurazion de objetos
let persona = {
    nombre: "Rocko",
    apellido: "Rocio",
    edad: 35
}

let { nombre, apellido, edad } = persona;

// console.log("La persona se llama", nombre);

// Spread operator de array
let series2 = ["Black List", "Black Mirror"];

let todasLasSeries = [...series, ...series2];

// console.log(todasLasSeries);

// Spread operator de objetos

let persona2 = {
    ...persona,
    direccion: {
        calle: 'Siempre viva',
        altura: 742,
        localidad: 'Sprinfield'
    }
}

// console.log(persona2);

// Spread operator con funciones

function sumar(a, b, c) {
    return a + b + c;
}

let numerosASumar = [3, 5, 6];

// console.log("suma", sumar(...numerosASumar));

// Rest operator

function sumar2(...numeros) {
    return numeros.reduce((acumulador, numero) => acumulador + numero, 0)
}

console.log("mi otra suma", sumar2(1,2,5,2));


