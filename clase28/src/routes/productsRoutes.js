const express = require('express');
const router = express.Router();

const productController = require('../controller/productController');

// Listado de productso
router.get('/', productController.index);
// creacion de producto
router.get('/create', productController.create);
router.post('/create', productController.store);
// actualizar producto
router.get('/edit/:id', productController.edit);
router.put('/edit/:id', productController.update);
// eliminar producto
router.get('/delete/:id', productController.delete);
router.delete('/delete/:id', productController.destroy);
// ver producto
router.get('/:id', productController.show);


module.exports = router;