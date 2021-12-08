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
        user_id: req.file.user_id,
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
  //"category","comments","users"
  const getposts = async (req, res) =>{

    Post.findAll({include: [
      {
      model:db.comment,
      as:"comments",include:[
        {
          model:db.users,
          as:"users"
        },
        
      ]
    },"category"]}).then(data1=>{
      return res.send({
        data:data1
      });
    });
  }

  // get comments according to  post
  const getcomments=async(req,res)=>{
    Post.findByPk(req.params.id, { include: [{
      model:db.comment,
      as:"comments",include:[{
        model:db.users,
          as:"users"
      }]
    }] }).then(data1=>{
      res.status(200).send({
        message:'Sucess',
        data:data1,
      
      })
    });

      // console.log("getpostssss");
      // res.send('Displaying information for uid ' + req.params.id);

      ///Post.findByPk()

  }

  // exports.findAll=(req,res)=>{
  //   Post.findAll().then(data1=>{
  //     return res.send({
  //       data:data1
  //     });
  //   });
  // };
  
  module.exports = {
    uploadFiles,getposts,getcomments
  };


