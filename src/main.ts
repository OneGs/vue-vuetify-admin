import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Notify from "@/components/tool-notification/install";
import "@/styles/index.scss";

Vue.use(Notify);

const name = "notify";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  [name]: new Notify(),
  render: (h) => h(App),
}).$mount("#app");
