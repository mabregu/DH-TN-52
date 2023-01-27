// Capa de modelo
let peliculas = [
    {
        id: 1,
        title: "El Padrino",
        anio: 1979,
        image: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
    },
    {
        id: 2,
        title: "El Padrino II",
        anio: 1980
    },
    {
        id: 3,
        title: "El Padrino III",
        anio: 1982
    }
];
// Capa controlador
const mainController = {
    home: function (req, res) {
        res.render("home", {
            lista: peliculas
        });
    },
    contact: function (req, res) {
        res.render("contact", {
            title: "contacto"
        });
    },
    detail: (req, res) => {
        let peliculaId = req.params.id;
        let pelicula = peliculas.find(pelicula => pelicula.id == peliculaId)
        
        res.render("detallePelicula", {
            movie: pelicula
        });
    }
}

module.exports = mainController;