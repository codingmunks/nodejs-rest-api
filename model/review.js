const db=require('../model');
module.exports = (sequelize, Sequelize) => {
    const AddReview = sequelize.define("reviews", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey: true,
      },
      text: {
        type: Sequelize.STRING
      },    
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          // This is a reference to another model
          model: "users",
          // This is the column name of the referenced model
          key: 'id',
          // With PostgreSQL, it is optionally possible to declare when to check the foreign key constraint, passing the Deferrable type.
           // Options:
          // - `Deferrable.INITIALLY_IMMEDIATE` - Immediately check the foreign key constraints
          // - `Deferrable.INITIALLY_DEFERRED` - Defer all foreign key constraint check to the end of a transaction
          // - `Deferrable.NOT` - Don't defer the checks at all (default) - This won't allow you to dynamically change the rule in a transaction
        }
        
       
      }, 
      post_id: {
        type: Sequelize.INTEGER,
        references: {
          // This is a reference to another model
          model: "posts",
          // This is the column name of the referenced model
          key: 'id',
          // With PostgreSQL, it is optionally possible to declare when to check the foreign key constraint, passing the Deferrable type.
           // Options:
          // - `Deferrable.INITIALLY_IMMEDIATE` - Immediately check the foreign key constraints
          // - `Deferrable.INITIALLY_DEFERRED` - Defer all foreign key constraint check to the end of a transaction
          // - `Deferrable.NOT` - Don't defer the checks at all (default) - This won't allow you to dynamically change the rule in a transaction
        }  

      }, 
    });
    return AddReview;
  };