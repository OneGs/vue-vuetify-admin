import Vue from "vue";
import Vuex from "vuex";
import login from "@str/modules/login";
import layout from "@str/modules/layout";
import menus from "@str/modules/menus";
import tagViews from "@str/modules/tagViews";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    login,
    layout,
    menus,
    tagViews,
  },
});
