module.exports = app => {
    const tutorials = require("../controller/tutorial.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", tutorials.create);
    router.get("/",tutorials.findAll)
    router.get("/:id", tutorials.findOne);

    app.use('/api/tutorials', router);
  };