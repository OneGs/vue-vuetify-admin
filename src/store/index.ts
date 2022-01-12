import Vue from "vue";
import Vuex from "vuex";
import login from "@str/modules/login";
import layout from "@str/modules/layout";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    login,
    layout,
  },
});
