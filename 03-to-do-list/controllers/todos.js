const Todo = require("../models/Todo.js");

const getAllTasks = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.status(200).json({ todos });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createTask = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.status(201).json({ todo });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getTask = async (req, res) => {
  try {
    const { id: todoID } = req.params;
    const todo = await Todo.findById(todoID).exec();
    if (!todo) {
      return res.status(404).json({ msg: `No task with ID: ${todoID}` });
    }
    res.status(200).json({ todo });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: todoID } = req.params;
    const todo = await Todo.findByIdAndUpdate(todoID, req.body, {
      new: true,
      runValidators: true,
    });
    if (!todo) {
      return res.status(404).json({ msg: `No task with ID: ${todoID}` });
    }
    res.status(200).json({ todo });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: todoID } = req.params;
    const todo = await Todo.findByIdAndDelete(todoID);
    if (!todo) {
      return res.status(404).json({ msg: `No task with ID: ${todoID}` });
    }
    res.status(200).json({ todo });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
