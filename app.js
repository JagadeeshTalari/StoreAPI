import express from "express";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();
//middleware

//routes
// app.use("/");

app.listen(port, console.log(`Server is listening...`));
