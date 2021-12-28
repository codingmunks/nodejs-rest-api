const db = require('../model');
const View = db.view;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.user_id) {
    res.status(404).send({
      message: 'user_id is required'
    })
  }
  if(!req.body.post_id)
  {
    res.status(404).send({
      message:'post_is is required'
    })
  }
  // Create a View
  const views = {
    user_id: req.body.user_id,
    post_id: req.body.post_id,
  };

};