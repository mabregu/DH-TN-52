let express = require('express');
let router = express.Router();

let mainController = require('../controllers/mainController');

/* GET home page. */
router.get('/', mainController.home);

/* GET detail menu. */
router.get('/menu/:id', mainController.menu);

// ruta delete menu
router.delete('/menu/:id', mainController.deleteMenu);

module.exports = router;
