module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("users", {
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.STRING
      }
    

    
    });
  
    return Tutorial;
  };