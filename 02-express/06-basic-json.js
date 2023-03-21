const express = require("express");
const app = express();
const port = 3000;
const { products } = require("./data");

app.get("/", (req, res) => {
  res.json(products);
});

app.all("*", (req, res) => {
  res.status(404).send(`<h1>Page Not Found</h1>`);
});

app.listen(port, () => {
  console.log(`Server Listening on Port ${port}`);
});
