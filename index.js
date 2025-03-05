const express = require("express");
const taskRoutes = require("./routes/tasks");

const app = express();
const port = 3000;

// middleware
app.use(express.json());

// routes
// app.get("/", (req, res) => {
//   res.send("This is task manager");
// });

app.use("/api/tasks", taskRoutes);

app.listen(port, console.log(`Server is listening on port ${port}`));
