<template>
  <div id="app">
    <webapp-header> </webapp-header>
    <router-view />

    <webapp-footer></webapp-footer>
  </div>
</template>
<script>
import header from "./views/header.vue";
import footer from "./views/footer.vue";

export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Default Title",
    // all titles will be injected into this template
    titleTemplate: "%s | RK Expo",
  },
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
  top: 30px;
}
</style>
