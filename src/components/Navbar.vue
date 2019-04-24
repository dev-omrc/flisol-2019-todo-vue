<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">Home</router-link>
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" v-if="auth" to="/tasks">Tareas</router-link>
        <a class="navbar-item" v-if="auth" href="#" @click="logout">Cerrar sesión</a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <router-link class="navbar-item" v-if="!auth" to="/login">Iniciar sesión</router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import apiClient from "./../services/AuthService.js";
import router from "./../router.js";

export default {
  props: ["auth"],
  //   data() {
  //     return {
  //       auth: localStorage.getItem("auth")
  //     };
  //   },
  methods: {
    logout() {
      apiClient
        .logout()
        .then(response => {
          localStorage.removeItem("token");
          localStorage.removeItem("auth");
          //   this.auth = false;

          this.$emit("loggedOut");
          router.replace("/");
        })
        .catch(error => console.log(error));
    }
  }
};
</script>

<style lang="scss" scoped>
</style>