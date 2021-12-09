const express = require("express");
const cors = require("cors");
const app = express();
global.__basedir = __dirname;

var corsOptions = {
  origin: "https://01bf-2402-8100-2266-1ad6-8148-b73e-a423-b4:5600"
};
app.use(cors(corsOptions));
const db=require('./model')
//db.sequelize.sync();
db.sequelize.sync({ force: true })
// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
 app.use(express.urlencoded({ extended: true }));

 require('./routers/turorial.routes')(app);
 require('./routers/faq_router')(app);
 require('./routers/user_router')(app);
 require('./routers/post_router')(app);
 require('./routers/category_router')(app);
 require('./routers/comment_router')(app);
// require('./routers/review_router')(app);

  // simple route
  app.get("/", (req, res) => {
    res.json({ message: "Welcome to KKtech application." });
  });
  // set port, listen for requests
  //const PORT = process.env.PORT || 8070;
  const PORT = 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });