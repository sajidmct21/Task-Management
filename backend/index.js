import express from "express";
import env from "dotenv";
import dbConnection from "./dbconnection/dbConnection.js";

const app = express();
env.config();

// Middlewares
app.use(express.json());

app.use("/", (req, res) => {
  res.send(`Hello from backend`);
});

// Global Error Handler
app.use((err, req, res, next) => {
  res.status(err.statusCode).json({
    statusCode: err.statusCode,
    name: err.name,
    message: err.message,
    stack: err.stack,
  });
});

const port = 3000;
dbConnection();
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
