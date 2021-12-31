import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Notify from "@/components/tool-notification/install";
import ruleTitle from "@/components/rule-title/install";
import formItem from "@/components/tool-form-item/install";
import ruleTable from "@/components/rule-table/install";
import ruleBtn from "@/components/rule-btn/install";
import "@/styles/custome-var.scss";

Vue.use(Notify);

Vue.use(ruleTitle);

Vue.use(formItem);

Vue.use(ruleTable);

Vue.use(ruleBtn);

const name = "notify";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  [name]: new Notify(),
  render: (h) => h(App),
}).$mount("#app");
