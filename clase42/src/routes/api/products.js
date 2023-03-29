const express = require('express');
const router = express.Router();
const productsAPIController = require('../../controllers/api/productsAPIController');

const upload = require('../../middlewares/upload');

router.get('/', productsAPIController.list);
// vamos a crear un producto
router.post('/create', upload.any('images'), productsAPIController.create)

module.exports = router;