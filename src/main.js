import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@fortawesome/fontawesome-free/js/all.js";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAoiep9OjkUTp0EDY9hbAV7eOmCA-EsCsY",
  },
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
