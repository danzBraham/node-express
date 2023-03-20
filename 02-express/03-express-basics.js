const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.status(200).send(`<h1>Home Page</h1>`);
});

app.get("/about", (req, res) => {
  res.status(200).send(`<h1>About Page</h1>`);
});

app.all("*", (req, res) => {
  res.status(404).send(`<h1>Page Not Found</h1>`);
});

app.listen(port, () => {
  console.log(`Server Listening on Port ${port}`);
});
