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
        // TODO: implentar metodo
    },
    store: (req, res) => {
        // TODO: implentar metodo
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
                auto.name = req.body.name;
                auto.year = req.body.year;

                autos[index] = auto;
            }
        });
        
        fs.writeFileSync(autosPath, JSON.stringify(autos, null, ' '));
        
        res.redirect('/products');
    },
    delete: (req, res) => {
        // TODO: implentar metodo
    },
    destroy: (req, res) => {
        // TODO: implentar metodo
    }
};

module.exports = productController;