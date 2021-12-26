import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#6246ea",
        secondary: "#a786df",

        warning: "#ff8e3c",
        error: "#d9376e",
        success: "#2cb67d",
        info: "#6246ea",
      },
    },
  },
});
