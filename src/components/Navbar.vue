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

// toggle
document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});
</script>

<style lang="scss" scoped>
</style>