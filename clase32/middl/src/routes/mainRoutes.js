const express = require('express');
const router = express.Router();

const mainController = require('../controller/mainController');
const guestMiddleware = require('../middlewares/guestMiddleware');

router.get('/', guestMiddleware, mainController.home);

router.get('/login', mainController.login);
router.post('/login', mainController.processLogin);

router.get('/profile', guestMiddleware, mainController.profile);

module.exports = router;