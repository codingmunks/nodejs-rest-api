const fs = require("fs");
const db=require('../model');
const Post = db.post;
const uploadFiles = async (req, res) => {
    try {
      console.log(req.file);
  
      if (req.file == undefined) {
        return res.send(`You must select a file.`);
      }
  
      Post.create({
        type: req.file.mimetype,
        name: req.file.originalname,
        cat_id:req.body.cat_id,
        data: fs.readFileSync(
          __basedir +"/resources/static/assets/uploads/" + req.file.filename
        ),
      }).then((image) => {
        // fs.writeFileSync(
        //   __basedir +"/resources/static/assets/tmp/" + image.name,
        //   image.data
        // );
  
        return res.send(`File has been uploaded.`);
      });
    } catch (error) {
      console.log(error);
      return res.send(`Error when trying upload images: ${error}`);
    }
  };
  
  module.exports = {
    uploadFiles,
  };


