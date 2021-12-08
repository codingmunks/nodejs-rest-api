const fs = require("fs");
const db=require('../model');
const Post = db.post;
const uploadFiles = async (req, res) => {
    try {
      console.log(req.file);
  
      if (req.file == undefined) {
        return res.send(`You must select a file.`);
      }
  
      ///resources/static/assets/uploads/" + req.file.filename
      Post.create({
        type: req.file.mimetype,
        name: req.file.originalname,
        cat_id:req.body.cat_id,
        data:"/resources/static/assets/uploads/",
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
  const getposts = async (req, res) =>{

    Post.findAll({include: ["category","comments"]}).then(data1=>{
      return res.send({
        data:data1
      });
    });
  }

  // exports.findAll=(req,res)=>{
  //   Post.findAll().then(data1=>{
  //     return res.send({
  //       data:data1
  //     });
  //   });
  // };
  
  module.exports = {
    uploadFiles,getposts
  };


