// matriz cursos y precios
// html5 4k css3 5k js 10k react 7k node 15k funcion callback para calcular precio
// fn devcuelve datos alumno y monto a pagar
let cursosPrecios = [['html5', 4000],['css3', 5000],['javascript', 10000],['react', 7000],['nodejs', 15000]
];
let cursosElegidos = ['HTML5', 'CSS3'];
// tiene calcular el precio
function calcularPrecio(catalogo, cursoQueEligio) {
    let precio = 0;
    
    for (let index = 0; index < catalogo.length; index++) {
        let titutloDelCurso = catalogo[index][0].toUpperCase();

        if (cursoQueEligio.includes(titutloDelCurso)) {
            precio = precio + catalogo[index][1];
        }
    }
    
    return precio;
}


function factura(nombre, apellido, catalogoCursos, cursosElegidos, callback) {
    let precio = callback(catalogoCursos, cursosElegidos);
    
    return `Estimado ${nombre} ${apellido} esto es lo que tenes que pagar ${precio}`;
}

console.log(
    "Estos son los cursos", cursosElegidos,
    factura("Rocio", "Rocko", cursosPrecios, cursosElegidos, calcularPrecio)
);