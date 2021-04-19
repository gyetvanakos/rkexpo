<template>
  <div id="app">
    <div id="nav">
      <webapp-header></webapp-header>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/References">References</router-link>
      <router-link to="/Calculator">Calculator</router-link>
      <router-link to="/Contact">Contact</router-link>asdasd
    </div>
    <router-view />
    <webapp-footer></webapp-footer>
  </div>
</template>

<script>
import header from "./views/header.vue";
import footer from "./views/footer.vue";

export default {
  name: "App",
  components: {
    "webapp-header": header,
    "webapp-footer": footer,
  },

  data() {
    return {};
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 0;
  margin: 0;

  a {
    font-weight: bold;
    color: red;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
