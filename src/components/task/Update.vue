<template>
  <form @submit.prevent>
    <div class="field">
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Escriba la tarea..."
          v-model="taskToEdit.name"
          @keyup.enter="updateTask"
          @keyup.esc="toggleEditMode"
        >
        <label class="is-size-7">Enter: Guardar, ESC: Cancelar</label>
      </div>
    </div>
  </form>
</template>

<script>
import apiClient from "./../../services/TaskService.js";
export default {
  data() {
    return {
      taskToEdit: {
        id: this.task.id,
        name: this.task.name
      }
    };
  },
  props: ["task"],
  methods: {
    updateTask() {
      apiClient
        .updateTask(this.taskToEdit)
        .then(response => {
          console.log(response);
          this.toggleEditMode();
          this.taskUpdated();
        })
        .catch(error => console.log(error));
    },
    toggleEditMode() {
      this.$emit("toggleEditMode");
    },
    taskUpdated() {
      this.$emit("taskNameUpdated");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>