<template>
  <section class="section">
    <div class="container is-fluid">
      <form @submit.prevent>
        <div class="field">
          <label class="label">Correo electrónico</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Escriba su correo electrónico"
              v-model="user.email"
            >
          </div>
        </div>
        <div class="field">
          <label class="label">Contraseña</label>
          <div class="control">
            <input class="input" type="password" placeholder="****" v-model="user.password">
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link" @click="login">Iniciar sesión</button>
          </div>
          <div class="control">
            <button class="button is-text" @click="clearFields">Cancelar</button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import apiClient from "./../services/AuthService.js";
import router from "./../router.js";

export default {
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      apiClient
        .login(this.user)
        .then(response => {
          localStorage.setItem("token", `Bearer ${response.data.access_token}`);
          localStorage.setItem("auth", true);

          this.clearFields();
          this.$emit("authenticated");
          router.push({ name: "task" });
        })
        .catch(error => {
          console.log(error);
        });
    },
    clearFields() {
      this.user = {
        email: "",
        password: ""
      };
    }
  }
};
</script>