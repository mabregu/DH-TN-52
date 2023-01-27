// About
// Login
// Logut
const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainControllers');

// Raiz
router.get('/', mainController.home)
// Contact
router.get('/contact', mainController.contact)
// detalle de pelicula
router.get('/pelicula/:id', mainController.detail)

module.exports = router;