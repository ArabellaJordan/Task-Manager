// const mongoose = require("mongoose");
// mongoose.connect();

const getAllTasks = (req, res) => {
  res.send("get all tasks");
};

const insertTask = (req, res) => {
  res.send("insert one task");
};

const getTask = (req, res) => {
  res.send("get one task");
};

const updateTask = (req, res) => {
  res.send("update one task");
};

const deleteTask = (req, res) => {
  res.send("delete one task");
};

module.exports = {
  getAllTasks,
  insertTask,
  getTask,
  updateTask,
  deleteTask,
};
