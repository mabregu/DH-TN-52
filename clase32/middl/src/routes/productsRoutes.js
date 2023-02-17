const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multer');
const productController = require('../controller/productController');
const rules = require('../middlewares/validator');

// Listado de producto
router.get('/', productController.index);
// creacion de producto
router.get('/create', productController.create); // subio solo en el cliente o en el browser
// router.post('/create', upload.single('images'), productController.store); // lo sube en el server
router.post('/create', upload.any('images'), rules, productController.store); // lo sube en el server
// actualizar producto
router.get('/edit/:id', productController.edit);
router.put('/edit/:id', productController.update);
// eliminar producto
router.get('/delete/:id', productController.delete);
router.delete('/delete/:id', productController.destroy);
// ver producto
router.get('/:id', productController.show);


module.exports = router;