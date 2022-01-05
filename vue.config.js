// eslint-disable-next-line @typescript-eslint/no-var-requires
const _ = require("path");

module.exports = {
  transpileDependencies: ["vuetify"],

  pages: {
    index: {
      entry: "src/main.ts",
      title: "title",
    },
  },

  devServer: {
    port: 9002,
  },

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

  chainWebpack: (config) => {
    config.module.rule("svg").exclude.add(_.resolve("src/assets/svgs")).end();

    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(_.resolve("src/assets/svgs"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      })
      .end();
  },
};
