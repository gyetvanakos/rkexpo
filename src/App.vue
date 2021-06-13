<template>
  <div id="app">
    <webapp-header>
      <meta
        name="description"
        content="RK Expo was founded in 2019. The company offers 
complete services for trade fairs and exhibitions. They provide realisation across 
Europe"/>
      <meta
        name="keywords"
        content="visualisation,3D,exhibition,exhibition booth,fair trades,czech republic,europe,international,calculator,"/>

      <meta name="author" content="Klara,Istvan and Akos"
    /></webapp-header>
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
  top: 30px;
}
</style>
