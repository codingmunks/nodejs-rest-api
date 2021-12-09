module.exports = (sequelize, Sequelize) => {
    const AddReview = sequelize.define("review", {
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
    return AddReview;
  };