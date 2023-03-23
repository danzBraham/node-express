const Todo = require("../models/Todo.js");

const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.status(200).json({ todos });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createTodo = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.status(201).json({ todo });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getTodo = async (req, res) => {
  try {
    const { id: todoID } = req.params;
    // const todo = await Todo.findById(todoID).exec();
    const todo = await Todo.findOne({ _id: todoID }).exec();
    if (!todo) {
      return res.status(404).json({ msg: `No todo with ID: ${todoID}` });
    }
    res.status(200).json({ todo });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateTodo = (req, res) => {
  res.send("update to do");
};

const deleteTodo = (req, res) => {
  res.send("delete to do");
};

module.exports = {
  getAllTodos,
  createTodo,
  getTodo,
  updateTodo,
  deleteTodo,
};
