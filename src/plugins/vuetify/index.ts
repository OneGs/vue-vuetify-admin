import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import preset from "@/plugins/vuetify/preset";

Vue.use(Vuetify);

export default new Vuetify({
  preset,

  theme: {
    options: {},
  },
});
