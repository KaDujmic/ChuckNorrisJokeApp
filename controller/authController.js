const { ValidationError, AuthorizationError } = require('../utils/error');
const { user } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const signToken = (email) => {
  return jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
};

const createSendToken = (user, statusCode, res, req) => {
  // Sign the token with user email
  const token = signToken(user.email);
  res.status(statusCode).json({
    status: 'success',
    token,
    user
  });
};

const createPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

exports.login = async (req, res) => {
  // 1) Destructure email and password from body
  const { email, password } = req.body;
  if (!email || !password) {
    throw new ValidationError('Please enter email and password');
  }
  // 2) Find the current user that wants to log in
  const currentUser = await user.findOne({ where: { email } });
  if (!currentUser || (await createPassword(password, currentUser.password) === false)) {
    throw new ValidationError('Incorrect email or password!');
  }
  // 3) Create jwt and send the response
  createSendToken(currentUser, 200, res, req);
};

exports.signup = async (req, res) => {
  // 1) Destructure email and password from body
  const { firstName, lastName, email, password, passwordConfirm } = req.body;
  if (!firstName || !lastName || !email || !password || !passwordConfirm) {
    throw new ValidationError('Please enter first name, last name, email, password, and password confirm');
  }
  // 2) Compare password and password confirm
  if (password !== passwordConfirm) {
    throw new ValidationError('Password and password confirm do not match');
  }
  // 3) Create the user
  const currentUser = await user.create({ firstName, lastName, email, password });

  // 4) Create jwt and send the response to login the user
  createSendToken(currentUser, 200, res, req);
};

exports.isLoggedIn = async (req, res, next) => {
  // 1) Getting the token and check if there is a Bearer
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }
  if (!token) { throw new AuthorizationError('You are not logged in. Please log in!'); }

  // 2) Verification of the token
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  // 3) Check if the user still exists
  const currentUser = await user.findOne({ where: { email: decoded.email } });
  if (!currentUser) { throw new ValidationError('The user no longer exists!'); }

  // 4) Set local storage and req.user to currentUser
  req.user = currentUser.dataValues;
  res.locals.user = currentUser.dataValues;
  next();
};

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(res.locals.user.roleName)) {
      return res
        .status(403)
        .json('You do not have permission to access this route!');
    }
    next();
  };
};
