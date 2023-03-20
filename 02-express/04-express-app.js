const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// setup static and middleware
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.all("*", (req, res) => {
  res.status(404).send(`<h1>Page Not Found</h1>`);
});

app.listen(port, () => {
  console.log(`Server Listening on Port ${port}`);
});
