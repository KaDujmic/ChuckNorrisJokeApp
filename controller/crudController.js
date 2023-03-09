exports.findAllModel = async (Model, req, res) => {
  const models = await Model.findAll({
    hooks: true
  });
  res.status(200).json({ models });
};

exports.findModel = async (Model, req, res) => {
  const model = await Model.findOne({
    where: { email: req.params.email },
    hooks: true
  });
  res.status(200).json(model);
};

exports.createModel = async (Model, req, res) => {
  const model = await Model.create(req.body);
  res.status(201).json(model);
};

exports.updateModel = async (Model, req, res) => {
  const model = await Model.update(req.body, {
    where: { email: req.params.email },
    returning: true
  });
  res.status(200).json(model);
};

exports.deleteModel = async (Model, req, res) => {
  const model = await Model.destroy({
    where: { email: req.params.email }
  });
  res.status(204).json(model);
};
