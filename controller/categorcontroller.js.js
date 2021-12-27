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
exports.getDataByCategoryById = async (req, res) => {
  console.log(req.params.id);
  const posts = await db.post.findAll({
    where: {
      cat_id: req.params.id
    },
    include: [
      {
        model: db.category,
        as: "category"
      },
      {
        model: db.comment,
        as: "comments",
        include:[
          {
            model:db.users,
            as:"users"
          }
        ]
      },  
      {
        model:db.review,
        as:"reviews"
      }
    ]
  });

  res.status(200).send({
    message: 'Sucess',
    data: posts,
  });

}


