const express = require("express");
const app = express();
const port = 3000;
const todos = require("./routes/todos.js");
const connectDB = require("./db/connect.js");
require("dotenv").config();

// middleware
app.use(express.static("./public"));
app.use(express.json());

// router
app.use("/api/v1/todos", todos);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server Listening on Port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
