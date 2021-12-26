import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Notify from "@/components/tool-notification/install";
import ruleTitle from "@/components/rule-title/install";
import formItem from "@/components/tool-form-item/install";

import "@/styles/index.scss";

Vue.use(Notify);

Vue.use(ruleTitle);

Vue.use(formItem);

const name = "notify";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  [name]: new Notify(),
  render: (h) => h(App),
}).$mount("#app");
