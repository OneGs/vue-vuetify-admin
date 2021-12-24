import Vue, { CreateElement } from "vue";
import VueRouter from "vue-router";
import EaRouter from "@/libs/auto-router/index";
import page404 from "@/views/components/page-error/404.vue";
import beforeEachCombine from "@/router/beforeEachCombine";

const eaGenerator = new EaRouter(require.context("../views", true, /\.vue$/));

eaGenerator
  .setDefaultLayout(
    Vue.component("layout-view", {
      render: (h: CreateElement) => h("router-view"),
    })
  )
  .setNotFoundPage(page404)
  .ignoreDir("components");

console.log(eaGenerator.generate());

Vue.use(VueRouter);

// const routes: Array<RouteConfig> = eaRouterGenerator.generate();

// routes[0].redirect = "/home";

// console.log(routes);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [],
});

router.beforeEach(beforeEachCombine);

export default router;
