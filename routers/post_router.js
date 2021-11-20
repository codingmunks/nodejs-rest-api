module.exports=app=>{
    const post = require("../controller/upload_controller.js"); 
    var router = require("express").Router();
    const upload = require("../middleware/upload");

    router.post("/addpost",upload.single("file"),post.uploadFiles);
    app.use('/api/post', router);
}