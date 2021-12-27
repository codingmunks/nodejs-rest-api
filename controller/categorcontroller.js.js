const db = require('../model');
const Category = db.category;
const Op = db.Sequelize.Op;
// Create and Save a new Tutorial
exports.create = (req, res) => {

  // Create a Tutorial

  const cate = {
    title: req.body.title,

  };
  // Save Tutorial in the database
  Category.create(cate)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });

};

exports.getcategorylist = (req, res) => {
  Category.findAll().then(data => {
    res.status(200).send({
      message: 'Sucess',
      data: data,

    })
  })
};
exports.getDataByCategoryById = (req, res) => {
  console.log(req.params.id);
  db.post.findAll({
    where: {
      cat_id: req.params.id
    }
  }, {
    include: [
      {
      // model:db.review,  
      // as:"reviews",
      model:db.comment,
      as:"comments",include:[
        {
          model:db.users,
          as:"users"
        },
        
      ]
    },"category","reviews"]}).then(data1 => {

    res.status(200).send({
      message: 'Sucess',
      data: data1,

    })
  });
}


