const express = require("express");
const taskRoutes = require("./routes/tasks");
const connectDB = require("./db/connection");
const notFound = require("./middleware/not-found");
const cors = require("cors");

require("dotenv").config();

const app = express();
const port = 3000;

// middleware
app.use(cors());
app.use(express.json());

app.use("/api/tasks", taskRoutes);
app.use(notFound);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
