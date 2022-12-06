// Turno de día, 30 noches con mi ex, Bestia, El monte, Top gun maverick', Elvis,Thor: amor y trueno
let peliculas = "Turno de día, 30 noches con mi ex, Bestia, El monte, Top gun maverick, Elvis, Thor: amor y trueno"
function toUpper(pelicula) {
    return pelicula.toUpperCase();
}
// Convertir el string en array
let arrayPeliculas = peliculas.split(", ")
// Buscar la pelicula q quiero
let indexPeli = arrayPeliculas.indexOf("Thor: amor y trueno");
// obtener la pelicula
let peliQuieroVer = arrayPeliculas.splice(indexPeli, 1)
// Pasar a mayuscula
let peliEnMayus = toUpper(peliQuieroVer[0]);
// agregar al array en 1er lugar
arrayPeliculas.unshift(peliEnMayus);

// Counter-Strike NOP Vértigo Nick Avatar.
let nuevoListadoDePeliculas = "Counter-Strike, NOP, Vértigo, Nick, Avatar.";
let newArrayPeliculas = nuevoListadoDePeliculas.split(", ")

// No es una pelicula es un juego
let newIndexPeli = newArrayPeliculas.indexOf("Counter-Strike");
// obtener el juego
let juegoARemover = newArrayPeliculas.splice(newIndexPeli, 1)

function concatenacion(array1, array2) {
    return array1.concat(array2);
}

console.log("concatenar", concatenacion(arrayPeliculas, newArrayPeliculas));