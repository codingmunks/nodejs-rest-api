module.exports = app => {
    const faq = require("../controller/faq_controller.js");
  
    var router = require("express").Router();
  
    // Create a new faq
    router.post("/", faq.create);
   
    app.use('/api/faq', router);
  };