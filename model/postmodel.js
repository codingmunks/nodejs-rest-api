module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define("post", {
      type: {
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
      },
      user_id: {
        type: DataTypes.STRING,
      },
      cat_id: {
        type: DataTypes.STRING,
      },
      data: {
        type:DataTypes.STRING,
      },
    });
  
    return Image;
  };