module.exports = app => {
    const comment = require("../controller/commentcontroller.js");
  
    var router = require("express").Router();
    // Create a new comment
    router.post("/addcomment", comment.create);
  
    app.use('/api/comment', router);
  };