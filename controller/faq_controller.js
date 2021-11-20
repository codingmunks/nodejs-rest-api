const db=require('../model');
const Faq = db.faqs;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
  
   // Create a Tutorial
   const faqs = {
    title: req.body.title,
    description: req.body.description,

  };
   // Save Tutorial in the database
   Faq.create(faqs)
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