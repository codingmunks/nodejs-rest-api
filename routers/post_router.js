module.exports=app=>{
    const post = require("../controller/upload_controller.js"); 
    var router = require("express").Router();
    const upload = require("../middleware/upload");

    router.post("/addpost",upload.single("file"),post.uploadFiles);
    router.get("/allpost",post.getposts)
    router.get("/getcomments/:id",post.getcomments)
    app.use('/api/post', router);
}