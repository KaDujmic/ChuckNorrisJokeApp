const express = require('express');
const userController = require('../controller/userController');
const authController = require('../controller/authController');
const { callbackErrorHandler } = require('../utils/callbackErrorHandler');

const router = express.Router({ mergeParams: true });

router.use(callbackErrorHandler(authController.isLoggedIn));

router
  .route('/')
  .get(callbackErrorHandler(userController.getJoke));

module.exports = router;
