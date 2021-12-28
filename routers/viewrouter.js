module.exports=app=>{
    const view=require('../controller/usercontroller.js')
    var router = require("express").Router();
    router.post("/addview",view.create)
    app.use('/api/view', router);
    
};
