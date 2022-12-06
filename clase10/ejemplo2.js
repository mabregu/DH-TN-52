// Metodos de un array parte II
let peliculas = ['El Padrino', 'Avatar', 'Stars Wars', 'El hombre del bicentenario', 'El Padrino II'];
// console.log(peliculas);
// map() - retorna un nuevo array
let pelisMap = peliculas.map(function (pelicula) {
    return pelicula.toUpperCase();
})
// console.log(pelisMap);

// filter() - retorna un nuevo array pero con un filtro
let pelsiFilter = peliculas.filter(function (pelicula) {
    return pelicula.includes("El Padrino") || pelicula == "Avatar";
})
// console.log(pelsiFilter);
// reduce() - retorna un solo valor
let pelisReduce = peliculas.reduce(function (acumulador, pelicula) {
    if (pelicula.includes('Padrino')) {
        acumulador.push(pelicula)
    }
    return acumulador;
}, [])
// console.log(pelisReduce);
let numeros = [1, 5, 6];
let newNums = numeros.reduce(function (acumulador, numero) {
    return acumulador + numero
}, 10)
//console.log(newNums);

//foreach()
peliculas.forEach(function (pelicula) {
    console.log(pelicula);
})