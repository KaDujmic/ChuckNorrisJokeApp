const express = require('express');
const userController = require('../controller/userController');
const authController = require('../controller/authController');
const { callbackErrorHandler } = require('../utils/callbackErrorHandler');

const router = express.Router({ mergeParams: true });

router.use(callbackErrorHandler(authController.isLoggedIn));

router
  .route('/')
  .get(
    authController.restrictTo(1),
    callbackErrorHandler(userController.findAllUsers)
  )
  .post(
    authController.restrictTo(1),
    callbackErrorHandler(userController.createUser)
  );

router
  .route('/:email')
  .get(
    authController.restrictTo(1),
    callbackErrorHandler(userController.findUser)
  )
  .put(
    authController.restrictTo(1),
    callbackErrorHandler(userController.updateUser)
  )
  .delete(
    authController.restrictTo(1),
    callbackErrorHandler(userController.deleteUser)
  );

module.exports = router;
