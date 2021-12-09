module.exports = app => {
    const review = require("../controller/reviewcontroller.js");
  
    var router = require("express").Router();
    // Create a new comment
    router.post("/addreview", review.create);
  
    app.use('/api/review', router);
  };