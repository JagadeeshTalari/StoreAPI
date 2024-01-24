const express = require("express");
const notFound = require("./middleware/notFound");
const errorHandlerMiddleware = require("./middleware/errorHandlerMiddleware");
const connectDB = require("./db/connect.db");
const productsRoutes = require("./routes/products.route");
require("dotenv").config();
require("express-async-errors");

const port = process.env.PORT || 5000;

const app = express();
//middleware
app.use(express.json());
//routes
app.get("/", (req, res) => {
  res.send("<h1>Store API</h1><a href='/api/v1/products'>Products Route</a>");
});

app.use("/api/v1/products", productsRoutes);

app.use(notFound);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    // connectDB
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening... ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
