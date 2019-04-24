<template>
  <div>
    <form @submit.prevent></form>
    <div class="container is-flex" id="header">
      <h1 class="title">Mis tareas ({{ tasksLength }})</h1>
      <a href="#" class="button" @click="toggleCreate">
        <font-awesome-icon icon="plus"/>Agregar tarea
      </a>
    </div>
    <create :isHidden="isHidden" @cancelCreate="toggleCreate" @taskCreated="taskWasTouched"></create>
    <task
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @taskUpdated="listTasks"
      @taskDeleted="listTasks"
    ></task>
  </div>
</template>

<script>
import Task from "./Task.vue";
import Create from "./Create";
import apiClient from "./../../services/TaskService.js";

export default {
  data() {
    return {
      tasks: {},
      isHidden: true,
      search: ""
    };
  },
  methods: {
    listTasks() {
      apiClient
        .getTasks()
        .then(response => {
          this.tasks = response.data.tasks;
        })
        .catch(error => {
          console.error(error);
        });
    },
    toggleCreate() {
      return (this.isHidden = !this.isHidden);
    },
    taskWasTouched() {
      this.toggleCreate();
      this.listTasks();
    }
  },
  computed: {
    tasksLength() {
      return this.tasks.length;
    }
  },
  components: {
    Task,
    Create
  },
  mounted() {
    this.listTasks();
  }
};
</script>

<style lang="scss" scoped>
a.button {
  svg {
    margin-right: 5px;
  }
  margin-bottom: 1em;
}

// #tasksContainer {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   // width: 50%;
//   a {
//     align-self: center;
//     width: 50%;
//     line-height: 2.5em;
//   }
// }

#header {
  justify-content: space-around;
  flex-direction: row;
}

.search {
  justify-content: center;
  margin-bottom: 1em;
}
</style>