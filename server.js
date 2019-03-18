const express = require ("express");
const bodyParser = require("body-parser");
const path = require ("path");
//const middleware = require ("./middleware/middleware");
//const errorHandlingMiddleware = require ("./middleware/error-handling");
const OrdersController = require ("./controllers/orders-controller");
const ProductsController = require ("./controllers/products-controller");
const PORT = process.env.PORT || 9000;
require("./models/index")().then(mongoose =>{
    const app = express();
   app.use(bodyParser.urlencoded({extended: true}))
   app.use(bodyParser.json())
   app.use("/api/orders", OrdersController);
   app.use("/api/products",ProductsController);
   //errorHandlingMiddleware(app);
   app.listen(PORT,()=>{
       console.log(`Server is running port ${PORT}`);
   })
}).catch(err => {
    console.error(err)
  })

