<template>
  <div class="container is-flex" :class="{completed: task.completed, editing: editMode}">
    <div class="subcontainer">
      <div class="box">
        <article class="media">
          <div class="media-content">
            <div class="content">
              <p>
                <small>{{ task.created_at }}</small>
                <br>
                <label v-show="!editMode" @click="editTask">{{ task.name }}</label>
                <update
                  v-show="editMode"
                  :task="task"
                  @taskNameUpdated="emitTaskUpdated"
                  @toggleEditMode="editTask"
                ></update>
              </p>
            </div>
          </div>
          <button class="button is-link is-inverted is-small is-pulled-left" @click="completeTask">
            <font-awesome-icon icon="check"></font-awesome-icon>
            <span v-if="task.completed">Marcar como incompleta</span>
            <span v-else>Marcar como completa</span>
          </button>
          <button class="button is-danger is-inverted is-small is-pulled-left" @click="deleteTask">
            <font-awesome-icon icon="trash"></font-awesome-icon>
            <span>Eliminar</span>
          </button>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import apiClient from "./../../services/TaskService.js";
import Update from "./Update";
export default {
  data() {
    return {
      editMode: false
    };
  },
  props: ["task"],
  methods: {
    completeTask() {
      apiClient
        .updateTask({ id: this.task.id, completed: !this.task.completed })
        .then(response => {
          this.emitTaskUpdated();
        })
        .catch(error => console.log(error));
    },
    deleteTask() {
      apiClient
        .deleteTask(this.task)
        .then(response => {
          this.$emit("taskDeleted");
        })
        .catch(error => console.log(error));
    },
    editTask() {
      this.editMode = !this.editMode;
    },
    emitTaskUpdated() {
      this.$emit("taskUpdated");
    }
  },
  components: {
    Update
  }
};
</script>

<style lang="scss" scoped>
.container.is-flex {
  width: 50%;
  margin-bottom: 1em;
  box-shadow: 1em;

  .subcontainer {
    margin-left: 1em;
    margin-bottom: 0;
    width: 100%;
  }
}

.completed {
  .box {
    background: lightgrey !important;
    p {
      small {
        text-decoration: line-through;
      }
      label {
        text-decoration: line-through;
      }
    }
  }
  .button {
    background: lightgrey !important;
  }
  .is-link {
    color: black !important;
  }
}

.editing {
  .box {
    p {
      input {
        text-decoration: none !important;
      }
    }
  }
}
</style>