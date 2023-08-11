const express = require('express');
const app = express();
const port = 3000;
let { people } = require('./data.js');

// static assets
app.use(express.static('./methods-public'));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post('/api/people', (req, res) => {
  const { name } = req.body;

  if (!name) {
    res.status(400).json({ success: false, msg: 'Please provide name value' });
  } else {
    res.status(201).json({ success: true, person: name });
  }
});

app.post('/api/postman/people', (req, res) => {
  const { name } = req.body;

  if (!name) {
    res.status(400).json({ success: false, msg: 'Please provide name value' });
  } else {
    res.status(201).json({ sucess: true, data: [...people, { name }] });
  }
});

app.post('/login', (req, res) => {
  const { name } = req.body;

  if (!name) {
    res.status(401).send('<h1>Please provide credentials</h1>');
  } else {
    res.status(401).send(`<h1>Welcome ${name}</h1>`);
  }
});

app.put('/api/people/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;
  const person = people.find((person) => person.id === id);

  if (!person) {
    res.status(404).json({ success: false, msg: `No person with ID ${id}` });
  } else {
    people.forEach((person) => {
      if (person.id === id) {
        person.name = name;
      }
    });
    res.status(201).json({ success: true, data: people });
  }
});

app.delete('/api/people/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const person = people.find((person) => person.id === id);

  if (!person) {
    res.status(404).json({ success: false, msg: `No person with ID ${id}` });
  } else {
    const newPeople = people.filter((person) => person.id !== id);
    res.status(200).json({ success: true, data: newPeople });
  }
});

app.listen(port, () => {
  console.log(`Server Listening on Port ${port}...`);
});
