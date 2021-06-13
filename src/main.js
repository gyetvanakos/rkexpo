import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@fortawesome/fontawesome-free/js/all.js";
import * as VueGoogleMaps from "vue2-google-maps";
import i18n from "./i18n";
import VueAnalytics from "vue-analytics";
import VueMeta from "vue-meta";

Vue.use(VueMeta);

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAoiep9OjkUTp0EDY9hbAV7eOmCA-EsCsY",
  },
});

// Configuration VueAnalytics
Vue.use(VueAnalytics, {
  id: "G-NSJXEHBKK2",
  router,
});

new Vue({
  i18n,
  router,
  render: (h) => h(App),
}).$mount("#app");
