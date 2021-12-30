import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

// #4b5fd1

const primary = "#5e72e4";

export default new Vuetify({
  theme: {
    themes: {
      light: {
        // primary: "#6246ea",
        primary,
        secondary: "#a786df",

        warning: "#ff8e3c",
        error: "#d9376e",
        success: "#2cb67d",
        info: primary,
      },
    },
  },
});
