const mongoose = require("mongoose");

const connectDB = (url) => {
  mongoose
    .connect(url)
    .then(() => {
      console.log("Connected to the database 'task-manager'");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = connectDB;
