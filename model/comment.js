module.exports = (sequelize, Sequelize) => {
    const Comment = sequelize.define("comment", {
      text: {
        type: Sequelize.STRING
      },    
      user_id: {
        type: Sequelize.INTEGER
      }, 
      post_id: {
        type: Sequelize.INTEGER
      }, 
    });
    return Comment;
  };