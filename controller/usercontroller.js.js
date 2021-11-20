 const db=require('../model');
const Users = db.users;
const Op = db.Sequelize.Op;
var bcrypt = require('bcrypt');
var validator = require("email-validator");
const config = require("../config/auth.config");
var jwt = require("jsonwebtoken");

// Create and Save a new Tutorial
exports.create = async (req, res) => {
  
  if(!req.body.name)
  {
    res.status(404).send({
      message:'name is required'
    })
  }
  if(!req.body.email)
  {
    res.status(404).send({
       message:'email is required'
    })
  }
  if(!validator.validate(req.body.email))
  {
    res.status(404).send({
      message:'email is not valid'
    })
  }
  if(!req.body.password)
  {
    res.status(404).send({
      message:'password is required'
    })
  }
  if(!req.body.age)
  {
    res.status(404).send({
      message:'age is required'
    })
  }
   
  const emailExists =  await Users.findOne({ where: { email: req.body.email } });
  console.log(emailExists);
  if(emailExists)
  {
    res.status(404).send({
      message:'Email already registered'
    })
  }
  else
  {
   //  // Save Tutorial in the database
    const users = {
      name: req.body.name,
      email: req.body.email,
      password:bcrypt.hashSync(req.body.password, 10),
      age:req.body.age
    };
  

    Users.create(users)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
   }
    
};

// login api
exports.login=(req,res)=>{
  console.log("Karan kocahr");

  if(!req.body.email)
  {
    res.status(404).send({
       message:'email is required'
    })
  }
  if(!validator.validate(req.body.email))
  {
    res.status(404).send({
      message:'email is not valid'
    })
  }
  if(!req.body.password)
  {
    res.status(404).send({
      message:'password is required'
    })
  }
   Users.findOne({ where: { email: req.body.email } })
  .then(data=>{
    if(!data)
    {
      res.status(404).send({
        message:'email not exists'
      })
    }
    else{
      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        data.password
      );
      if(!passwordIsValid)
      {
        res.status(404).send({
          message:'invalid password'
        })
      }

      var token = jwt.sign({ id: data.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });
      console.log(token);
      res.status(200).send({
        message:'Sucess',
        user:data,
        token:token
      })
    }

  }).catch(err =>{
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Tutorial."
    });
  });

};

exports.changepassword=(req,res)=>{
  if(!req.body.id)
  {
    res.status(404).send({
      message:'id is missing'
    });
  }
  if(!req.body.currentpassword)
  {
    res.status(404).send({
      message:'Enter current password'
    });
  }
  if(!req.body.newpassword)
  {
    res.status(404).send({
      message:'Enter new password'
    });
  }
  if(!req.body.confirmnewpassword)
  {
    res.status(404).send({
      message:'Enter confirm password'
    });
  }
  if(req.body.newpassword!=req.body.confirmnewpassword)
  {
    res.status(404).send({
      message:'Password not match'
    });
  }
  else{
    Users.findOne({ where: { id: req.body.id } }).then(data=>{
        if(!data)
        {
          res.status(404).send({
            message:'User not found'
          });
        }
        else{
          Users.update({
            password: bcrypt.hashSync(req.body.newpassword, 10),
          }, {
             where: {
                id: req.body.id
               } 
          }).then(data=>{
            res.status(200).send({
              message:'Password change Sucessfully'
            });
              
          });
        }
    }).catch(err=>{
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
  }
};


exports.updateprofile=(req,res)=>{
  if(!req.body.id)
  {
    res.status(404).send({
       message:'id is requried'
    })
  }
  if(!req.body.name)
  {
    res.status(404).send({
      message:'name is required'
    })
  }
  if(!req.body.email)
  {
    res.status(404).send({
       message:'email is required'
    })
  }
  if(!validator.validate(req.body.email))
  {
    res.status(404).send({
      message:'email is not valid'
    })
  }
  if(!req.body.age)
  {
    res.status(404).send({
      message:'age is required'
    })
  }
  Users.findOne({ where: { id: req.body.id }}).then(data=>{
    if(!data)
    {
      res.status(404).send({
        message:'User not found'
      });
    }
    else{
      data.update(req.body).then( updatedRecord => {
        console.log('updated record');
        res.status(200).send({
          message:'Profile update successfully',
          data:updatedRecord
        });
        // login into your DB and confirm update
      })
  
    }
}).catch(err=>{
  res.status(500).send({
    message:
      err.message || "Some error occurred while creating the Tutorial."
  });
});
};








