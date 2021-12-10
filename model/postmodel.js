const db=require('../model');
module.exports = (sequelize, Sequelize) => {
    const Image = sequelize.define("post", {
      id: {
        type: Sequelize.INTEGER,
         primaryKey: true,
      },
      type: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      review: {
        type: Sequelize.STRING,
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
      // cat_id: {
      //   type: Sequelize.INTEGER,
      //   references: {
      //     // This is a reference to another model
      //     model: db.category,
      //     // This is the column name of the referenced model
      //     key: 'id',
      //     // With PostgreSQL, it is optionally possible to declare when to check the foreign key constraint, passing the Deferrable type.
      //      // Options:
      //     // - `Deferrable.INITIALLY_IMMEDIATE` - Immediately check the foreign key constraints
      //     // - `Deferrable.INITIALLY_DEFERRED` - Defer all foreign key constraint check to the end of a transaction
      //     // - `Deferrable.NOT` - Don't defer the checks at all (default) - This won't allow you to dynamically change the rule in a transaction
      //   }
      // },
      
    });
  
    return Image;
  };