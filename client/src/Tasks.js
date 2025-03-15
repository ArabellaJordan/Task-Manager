import axios from "axios";

const url = "/api/tasks";

class Tasks {
  static async getTasks() {
    try {
      const res = await axios.get(url);
      const tasks = res.data.tasks;
      return tasks;
    } catch (error) {
      return error;
    }
  }
}

export default Tasks;
