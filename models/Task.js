const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title cannot be empty"],
    trim: true,
    maxlength: [50, "Title cannot be too long"],
  },
  content: { type: String, required: [true, "Content cannot be empty"] },
  is_completed: { type: Boolean, default: false },
});

module.exports = mongoose.model("Task", TaskSchema);
