module.exports = app => {
    const users = require("../controller/usercontroller.js");  
    var router = require("express").Router();
    // Create a new faq
    router.post("/", users.create);
    router.post("/login",users.login);
    router.post("/changepassword",users.changepassword);
    router.post("/updateprofile",users.updateprofile)
    app.use('/api/users', router);
  };