const express = require("express");
const app = express();
const port = 3000;

app.get("/hello", (req, res) => {
  res.send("To Do List App");
});

app.listen(port, () => {
  console.log(`Server Listening on Port ${port}...`);
});
