const express = require('express');
const router = express.Router();

const mainController = require('../controller/mainController');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', mainController.home);

router.get('/login', authMiddleware, mainController.login);
router.post('/login', mainController.processLogin);

router.get('/logout', authMiddleware, mainController.logout);

router.get('/profile', guestMiddleware, mainController.profile);

module.exports = router;