<template>
  <section class="section is-flex createSection" :class="{'is-hidden':isHidden}">
    <!-- <div class="container"> -->
    <div class="card" id="cardCreate">
      <div class="card-content">
        <div class="content">
          <form action="#" @submit.prevent>
            <div class="field">
              <label class="label">Tarea</label>
              <div class="control">
                <input
                  class="input"
                  type="text"
                  placeholder="Escriba la tarea..."
                  v-model="task.name"
                >
              </div>
            </div>
            <div class="field is-grouped">
              <div class="control">
                <button class="button is-link" @click="createTask">Guardar</button>
              </div>
              <div class="control">
                <button class="button is-text" @click="$emit('cancelCreate')">Cancelar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- </div> -->
  </section>
</template>

<script>
import apiClient from "./../../services/TaskService.js";
export default {
  props: ["isHidden"],
  data() {
    return {
      task: {
        name: ""
      }
    };
  },
  methods: {
    createTask() {
      apiClient
        .createTask(this.task)
        .then(response => {
          this.$emit("taskCreated");
        })
        .catch(error => console.error(error));
    }
  },
  watch: {
    isHidden() {
      if (this.isHidden) {
        this.task = {
          name: ""
        };
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.createSection {
  align-items: center;
  justify-content: center;
}
#cardCreate {
  width: 50%;
}
</style>