// About
// Login
// Logut
const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainControllers');

// Raiz
router.get('/', mainController.home)

// Contact
router.get('/contact', (req, res) => {
    res.send("Hola contact!");
});

module.exports = router;