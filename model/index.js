const dbconfig=require('../config/db.config')
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbconfig.DB, dbconfig.USER, dbconfig.PASSWORD, {
  host: dbconfig.HOST,
  dialect: dbconfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbconfig.pool.max,
    min: dbconfig.pool.min,
    acquire: dbconfig.pool.acquire,
    idle: dbconfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.faqs = require("./faq.js")(sequelize, Sequelize);
db.category = require("./category.js")(sequelize, Sequelize);
db.comment = require("./comment.js")(sequelize, Sequelize);

db.users = require("./user.js")(sequelize, Sequelize);
db.post = require("./postmodel.js")(sequelize, Sequelize);
db.category = require("./category.js")(sequelize, Sequelize);
db.review = require("./review.js")(sequelize, Sequelize);
db.view=require("./viewpost.js")(sequelize, Sequelize);
 
db.post.belongsTo(db.category,{
  foreignKey:'cat_id',
  as: "category",

});
db.post.hasMany(db.comment, { as: "comments" ,foreignKey:"post_id"})
db.post.hasMany(db.review, { as: "reviews" ,foreignKey:"post_id"})
db.category.hasMany(db.post,{ as: "posts" ,foreignKey:"cat_id"})
//db.category.belongsToMany(db.post,{as:"posts",foreignKey:"cat_id"})

db.comment.belongsTo(db.post,{
  foreignKey:"post_id",
  as: "posts"
});
db.review.belongsTo(db.post,{
  foreignKey:"post_id",
  as: "reviews"
});
db.comment.belongsTo(db.users,{
  foreignKey:"user_id",
  as: "users"
});
db.post.belongsTo(db.users,{
  foreignKey:"user_id",
  as: "users"
});


module.exports = db;