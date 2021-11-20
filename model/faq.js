module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("faq", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
    
    });
  
    return Tutorial;
  };