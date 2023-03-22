const express = require("express");
const app = express();
const port = 3000;

const people = require("./routers/people.js");
const auth = require("./routers/auth.js");

// static assets
app.use(express.static("./methods-public"));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());
// router
app.use("/api/people", people);
app.use("/login", auth);

app.listen(port, () => {
  console.log(`Server Listening on Port ${port}...`);
});
