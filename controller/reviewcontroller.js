const db=require('../model');
const Review = db.review;
const Op = db.Sequelize.Op;
// Create and Save a new Tutorial
exports.create = (req, res) => 
{
   // Create a Tutorial
   const data={
    text: req.body.text,
    user_id: req.body.user_id,
    post_id: req.body.post_id,
  };
  if(!req.body.text)
  {
    res.status(404).send({
      message:'review is requried'
    })
  }
  if(!req.body.user_id)
  {
    res.status(404).send({
      message:'user id is requried'
    })
  }
  if(!req.body.post_id)
  {
    res.status(404).send({
      message:'post id is requried'
    })
  }
   // Save Review in the database
   Review.create(data).then(data =>{
     res.send(data);
  })
   .catch(err => {
     res.status(500).send({
       message:
         err.message || "Some error occurred while creating the Tutorial."
     });
   });
  
};

