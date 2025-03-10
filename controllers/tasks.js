const taskModel = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await taskModel.find();
    res.status(201).json({ tasks });
  } catch (error) {
    res.status(500).json(error);
  }
};

const insertTask = async (req, res) => {
  try {
    const task = await taskModel.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json(error.errors.content.message);
  }
};

const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await taskModel.findOne({ _id: taskID });
    if (!task) {
      return res.status(404).json({ message: `No task with ID: ${taskID}` });
    }
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await taskModel.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res.status(404).json({ message: `No task with ID: ${taskID}` });
    }
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await taskModel.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({ message: `No task with ID: ${taskID}` });
    }
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports = {
  getAllTasks,
  insertTask,
  getTask,
  updateTask,
  deleteTask,
};
