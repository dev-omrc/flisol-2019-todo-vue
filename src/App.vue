<template>
  <div id="app">
    <app-navbar :auth="this.auth" @loggedOut="logout"></app-navbar>
    <router-view @authenticated="setAuth"/>
  </div>
</template>

<script>
import appNavbar from "./components/Navbar";

export default {
  data() {
    return {
      auth: false
    };
  },
  components: {
    appNavbar
  },
  methods: {
    setAuth() {
      this.auth = true;
    },
    logout() {
      this.auth = false;
    }
  },
  mounted() {
    const token = localStorage.getItem("token");

    if (token) {
      this.token = token;
      this.auth = true;
    }
  }
};
</script>

<style>
</style>
