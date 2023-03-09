const models = require('../models');
const Model = require('./crudController');

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
