let menuList = [
    {
        id: 1,
        title: "Carpaccio fresco",
        price: "U$S 65.50",
        description: "Entrada Carpaccio de salmón con cítricos",
        image: ""
    },
    {
        id: 2,
        title: "Risotto de berenjena",
        price: "U$S 47.00",
        description: "Risotto de berenjena y queso de cabra ",
        image: ""
    },
    {
        id: 3,
        title: "Mousse de arroz",
        price: "U$S 27.50",
        description: "Mousse de arroz con leche y aroma de azahar ",
        image: ""
    },
    {
        id: 4,
        title: "Espárragos blancos",
        price: "U$S 37.50",
        description: "Espárragos blancos con vinagreta de verduras y jamón ibérico",
        image: "esparragos.png"
    }
];

const mainController = {
    home: function(req, res, next) {
        res.render('index', { title: 'Express' });
    },
    menu: function (req, res, next) {
        let menu = menuList.find(menu => menu.id == req.params.id);
        
        res.render('detalleMenu', {
            title: 'detalle menu',
            menu
        });
    }
}

module.exports = mainController;