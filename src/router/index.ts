import Vue, { CreateElement } from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import RouteGenerate from "ea-router";
import page404 from "@/components/page-error/404.vue";
import beforeEachCombine from "@/router/beforeEachCombine";

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

routes[0].redirect = "/home";

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(beforeEachCombine);

export default router;
