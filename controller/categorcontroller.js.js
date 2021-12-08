const db=require('../model');
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

