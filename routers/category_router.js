module.exports = app => {
    const category = require("../controller/categorcontroller.js");
  
    var router = require("express").Router();
  
    // Create a new faq
    router.post("/addcategory", category.create);
   
    app.use('/api/category', router);
  };