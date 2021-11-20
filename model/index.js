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
db.users = require("./user.js")(sequelize, Sequelize);
db.post = require("./postmodel.js")(sequelize, Sequelize);
db.category = require("./category.js")(sequelize, Sequelize);


module.exports = db;