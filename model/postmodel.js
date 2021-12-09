const db=require('../model');
module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define("post", {
      type: {
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
      },
      review: {
        type: DataTypes.STRING,
      },

      user_id: {
        type: DataTypes.STRING,
        references: {
          // This is a reference to another model
          model: db.users,
          // This is the column name of the referenced model
          key: 'id',
          // With PostgreSQL, it is optionally possible to declare when to check the foreign key constraint, passing the Deferrable type.
           // Options:
          // - `Deferrable.INITIALLY_IMMEDIATE` - Immediately check the foreign key constraints
          // - `Deferrable.INITIALLY_DEFERRED` - Defer all foreign key constraint check to the end of a transaction
          // - `Deferrable.NOT` - Don't defer the checks at all (default) - This won't allow you to dynamically change the rule in a transaction
        }
        
      },
      cat_id: {
        type: DataTypes.STRING,
        references: {
          // This is a reference to another model
          model: db.category,
          // This is the column name of the referenced model
          key: 'id',
          // With PostgreSQL, it is optionally possible to declare when to check the foreign key constraint, passing the Deferrable type.
           // Options:
          // - `Deferrable.INITIALLY_IMMEDIATE` - Immediately check the foreign key constraints
          // - `Deferrable.INITIALLY_DEFERRED` - Defer all foreign key constraint check to the end of a transaction
          // - `Deferrable.NOT` - Don't defer the checks at all (default) - This won't allow you to dynamically change the rule in a transaction
        }
      },
      data: {
        type:DataTypes.STRING,
      },
    });
  
    return Image;
  };