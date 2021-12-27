const fs = require("fs");
const db=require('../model');
const Post = db.post;
const uploadFiles = async (req, res) => 
{
    try {
      console.log(req.file);
  
      if (req.file == undefined) {
        return res.send(`You must select a file.`);
      }
  
      ///resources/static/assets/uploads/" + req.file.filename
      Post.create({
        type: req.file.mimetype,
        name: req.file.originalname,
        user_id: req.body.user_id,
        cat_id:req.body.cat_id,
        data:"/resources/static/assets/uploads/",
      }).then((data1) => {
            
        // update the review
        console.log(data1.id);
        Post.findByPk(data1.id, { include: [{
          model:db.comment,
          as:"comments",include:[{
            model:db.users,
              as:"users"
          }, ],
        },"category","reviews"] }).then(data=>{

          Post.update({review:data.reviews.length},{
            where: {
              id: data.id
             } 
          })
    
          
        });
        res.status(200).send({
          message:'Sucess',
          data:data1,
        
        })

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
      // model:db.review,  
      // as:"reviews",
      model:db.comment,
      as:"comments",include:[
        {
          model:db.users,
          as:"users"
        },
        
      ]
    },"category","reviews"]}).then(data1=>
      {
      return res.send({
        data:data1
      });
    });
  }
  // get comments according to  post
  const getcomments=async(req,res)=>{
    Post.findByPk(req.params.id, { include: [
      {
      model:db.comment,
      as:"comments",include:[{
        model:db.users,
          as:"users"
      }, ],
    },"category","reviews"] }).then(data1=>{

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


