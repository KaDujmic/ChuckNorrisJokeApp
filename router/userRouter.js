const express = require('express');
const userController = require('../controller/userController');
const authController = require('../controller/authController');
const { callbackErrorHandler } = require('../utils/callbackErrorHandler');

const router = express.Router({ mergeParams: true });

router.use(callbackErrorHandler(authController.isLoggedIn));

router
  .route('/')
  .get(
    callbackErrorHandler(userController.findAllUsers)
  )
  .post(
    callbackErrorHandler(userController.createUser)
  );

router
  .route('/:email')
  .get(
    callbackErrorHandler(userController.findUser)
  )
  .put(
    callbackErrorHandler(userController.updateUser)
  )
  .delete(
    callbackErrorHandler(userController.deleteUser)
  );

module.exports = router;
