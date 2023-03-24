import express from "express";
const app = express();
const port = 3000;
import todos from "./routes/todos.js";
import connectDB from "./db/connect.js";
import dotenv from "dotenv";
dotenv.config();

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
