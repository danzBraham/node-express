let { people } = require('../data.js');

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const createPerson = (req, res) => {
  const { name } = req.body;

  if (!name) {
    res.status(400).json({ success: false, msg: 'Please provide name value' });
  } else {
    res.status(201).json({ success: true, person: name });
  }
};

const createPersonPostman = (req, res) => {
  const { name } = req.body;

  if (!name) {
    res.status(400).json({ success: false, msg: 'Please provide name value' });
  } else {
    res.status(201).json({ sucess: true, data: [...people, { name }] });
  }
};

const updatePerson = (req, res) => {
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
};

const deletePerson = (req, res) => {
  const id = parseInt(req.params.id);
  const person = people.find((person) => person.id === id);

  if (!person) {
    res.status(404).json({ success: false, msg: `No person with ID ${id}` });
  } else {
    const newPeople = people.filter((person) => person.id !== id);
    res.status(200).json({ success: true, data: newPeople });
  }
};

module.exports = {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
};
