// Arrays
let series = ['Game of thrones', 'Breaking Bad', 'The simpsons'];
console.log("Serie:", series[1]);
console.log("Longitud", series.length);
// Metodos de un array
// Agregar un elemento al final
series.push('The office');
console.log("Series", series);
// Eliminar el ultimo
series.pop()
console.log("Series", series);

let pelicula = "Terminator II";
console.log("replace", pelicula.replace("Terminator", "Avatar"));

console.log("slice", pelicula.slice(-2));
console.log("split", pelicula.split(" "))
console.log("splice", series.splice(2), series)