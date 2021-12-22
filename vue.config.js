// eslint-disable-next-line @typescript-eslint/no-var-requires
const _ = require("path");

module.exports = {
  transpileDependencies: ["vuetify"],

  configureWebpack: {
    resolve: {
      alias: {
        "@": _.resolve("src"),
        "@cps": _.resolve("src/components"),
        "@ast": _.resolve("src/assets"),
        "@aps": _.resolve("src/apis"),
        "@lay": _.resolve("src/layout"),
        "@str": _.resolve("src/store"),
        "@vws": _.resolve("src/views"),
        "@uts": _.resolve("src/utils"),
        "@sty": _.resolve("src/styles"),
        "@req": _.resolve("src/requests"),
      },
    },
  },
};
