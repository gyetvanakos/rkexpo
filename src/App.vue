<template>
  <div id="app">
    <webapp-header></webapp-header>
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

header {
  position: absolute;
  top: 50px;
}
</style>
