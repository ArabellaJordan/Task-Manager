<template>
  <div>Tasks Home</div>
  <div>
    <input type="text" placeholder="Create a new task!" v-model="title" />
    <button type="button">Create</button>
  </div>
  <div>
    <div>
      <div>
        <div v-for="task in tasks" :key="task._id">
          <h5>{{ task.title }}</h5>
          <p>{{ task.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Tasks from "@/Tasks";

export default {
  name: "TasksHome",
  data() {
    return {
      title: "",
      tasks: [],
    };
  },
  async created() {
    this.tasks = await Tasks.getTasks();
    console.log(this.tasks);
  },
  methods: {},
};
</script>
