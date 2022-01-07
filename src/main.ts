import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Notify from "@cps/tool-notification/install";
import "@/styles/custome-var.scss";
import "@/plugins";

Vue.use(Notify);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  notify: new Notify(),
  render: (h) => h(App),
}).$mount("#app");
