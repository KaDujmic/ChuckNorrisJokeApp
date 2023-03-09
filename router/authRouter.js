const express = require('express');
const { login, signup } = require('../controller/authController');
const { callbackErrorHandler } = require('../utils/callbackErrorHandler');
const router = express.Router({ mergeParams: true });

router.post('/login', callbackErrorHandler(login));
router.post('/signup', callbackErrorHandler(signup));

module.exports = router;
