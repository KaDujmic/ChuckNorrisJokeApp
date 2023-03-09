const models = require('../models');
const Model = require('./crudController');
const { generateMail } = require('../utils/email');
const axios = require('axios');

exports.findAllUsers = async (req, res) => {
  await Model.findAllModel(models.user, req, res);
};

exports.findUser = async (req, res) => {
  await Model.findModel(models.user, req, res);
};

exports.createUser = async (req, res) => {
  await Model.createModel(models.user, req, res);
};

exports.updateUser = async (req, res) => {
  await Model.updateModel(models.user, req, res);
};

exports.deleteUser = async (req, res) => {
  await Model.deleteModel(models.user, req, res);
};

exports.getJoke = async (req, res) => {
  const joke = await axios.get('https://api.chucknorris.io/jokes/random');
  console.log(joke);
  res.status(200).json({
    user: res.locals.user,
    joke: joke.data.value
  });
  generateMail(res.locals.user, joke.data.value);
};
