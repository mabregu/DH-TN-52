let express = require('express');
let router = express.Router();

let mainController = require('../controllers/mainController');

/* GET home page. */
router.get('/', mainController.home);

/* GET detail menu. */
router.get('/menu/:id', mainController.menu);

module.exports = router;
