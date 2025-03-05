const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  insertTask,
  updateTask,
  getTask,
  deleteTask,
} = require("../controllers/tasks");

router.route("/").get(getAllTasks).post(insertTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
