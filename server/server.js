const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const cors = require("cors");
const DBConnection = require("./config/DB");
dotenv.config();

//modiddleware....
const app = express();
app.use(express.json());
app.use(cors());

//... routes...
app.use("/api/user", require("./Routes/userRoutes"));
app.use("/api/products", require("./Routes/productRoutes"));

//port.....
const port = process.env.PORT || 1000;

//connection call.....
DBConnection();

// listen.....
app.listen(port, () => {
  console.log(`server is start at : ${port}`.bgMagenta.white);
});
