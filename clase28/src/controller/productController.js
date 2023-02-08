const fs = require('fs');
const path = require('path');
const autosPath = path.join(__dirname, '../data/autos.json');

//Date.now()
const productController = {
    getCars: () => {
        return JSON.parse(fs.readFileSync(autosPath, 'utf-8'));
    },
    index: (req, res) => {
        res.render('products/index', {
            title: 'Listado de productos',
            carsList: productController.getCars()
        });
    },
    show: (req, res) => {
        let autoId = req.params.id;
        let auto = productController.getCars().find(auto => auto.id == autoId);
        
        res.render('products/show', {
            title: 'Mi auto',
            car: auto
        });
    },
    create: (req, res) => {
        res.render('products/create', {
            title: 'Nuevo auto'
        });
    },
    store: (req, res) => {
        let autos = productController.getCars();
        let newAuto = {
            "id": Date.now(),
            "name": req.body.name || "Sin nombre",
            "km": req.body.km || 0,
            "year": req.body.year || 0,
            "price": req.body.price || 0,
            "available": false
        }
        
        autos.push(newAuto);
        
        fs.writeFileSync(autosPath, JSON.stringify(autos, null, ' '));
        
        res.redirect('/products');
    },
    edit: (req, res) => {
        let autoId = req.params.id;
        let auto = productController.getCars().find(auto => auto.id == autoId);
        
        res.render('products/edit', {
            title: 'Mi auto',
            car: auto
        });
    },
    update: (req, res) => {
        let autoId = req.params.id;
        let autos = productController.getCars();

        autos.forEach((auto, index) => {
            if (auto.id == autoId) {        
                // auto.name = Talon
                auto.name = req.body.name; // auto.name = Talon de aquiles
                auto.year = req.body.year;

                autos[index] = auto;
            }
        });
        
        fs.writeFileSync(autosPath, JSON.stringify(autos, null, ' '));
        
        res.redirect('/products');
    },
    delete: (req, res) => {
        let autoId = req.params.id;
        let auto = productController.getCars().find(auto => auto.id == autoId);
        
        res.render('products/delete', {
            title: 'Eliminar auto',
            car: auto
        });
    },
    destroy: (req, res) => {
        let autoId = req.params.id;
        let autos = productController.getCars();// array
        
        let newAutos = autos.filter(auto => auto.id != autoId); // nuevo

        // Modifica el archivo
        fs.writeFileSync(autosPath, JSON.stringify(newAutos, null, ' '));
        
        res.redirect('/products');
    }
};

module.exports = productController;