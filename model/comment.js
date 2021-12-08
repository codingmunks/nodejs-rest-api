module.exports = (sequelize, Sequelize) => {
    const Comment = sequelize.define("comment", {
      text: {
        type: Sequelize.STRING
      },    
      user_id: {
        type: Sequelize.STRING
      }, 
      post_id: {
        type: Sequelize.STRING
      }, 
    });
    return Comment;
  };