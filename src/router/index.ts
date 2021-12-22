import Vue, { CreateElement } from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import RouteGenerate from "ea-router";
import page404 from "@/layouts/error-page/404.vue";

const eaRouterGenerator = new RouteGenerate(
  require.context("../views", true, /\.vue$/)
);

eaRouterGenerator.setDefaultLayout(
  Vue.component("layout-view", {
    render: (h: CreateElement) => h("router-view"),
  })
);

eaRouterGenerator.setNotFoundPage(page404);

Vue.use(VueRouter);

const routes: Array<RouteConfig> = eaRouterGenerator.generate();

console.log(routes);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
