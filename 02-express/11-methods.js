const express = require("express");
const app = express();
const port = 3000;
let { people } = require("./data.js");

// static assets
app.use(express.static("./methods-public"));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }
  res.status(201).json({ success: true, person: name });
});

app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }
  res.status(201).json({ sucess: true, data: [...people, { name }] });
});

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(401).send(`Please Provide Credentials`);
  }
  res.status(200).send(`<h1>Welcome ${name}</h1>`);
});

app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((person) => person.id === parseInt(id));
  if (!person) {
    res.status(404).json({ success: false, msg: `no person with ID ${id}` });
  }
  const newPeople = people.map((person) => {
    if (person.id === parseInt(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(201).json({ success: true, data: newPeople });
});

app.delete("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const person = people.find((person) => person.id === parseInt(id));
  if (!person) {
    res.status(404).json({ success: false, msg: `No person with ID ${id}` });
  }
  const newPeople = people.filter((person) => person.id !== parseInt(id));
  res.status(200).json({ success: true, data: newPeople });
});

app.listen(port, () => {
  console.log(`Server Listening on Port ${port}...`);
});
