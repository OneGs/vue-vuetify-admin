import store from "@/store";
import Vue, { CreateElement } from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import EaRouter from "@/libs/auto-router/index";
import page404 from "@/views-template/components/page-error/404.vue";
import beforeEachCombine from "@/router/beforeEachCombine";
import config from "@/config";

console.log(config, "congih");

function generateRoutes(
  requiredContext: __WebpackModuleApi.RequireContext,
  has404: boolean
): RouteConfig[] {
  const generator = new EaRouter(requiredContext);

  generator
    .setDefaultLayout(
      Vue.component("layout-view", {
        render: (h: CreateElement) => h("router-view"),
      })
    )
    .ignoreDir("components");

  if (has404) {
    generator.setNotFoundPage(page404);
  }

  return generator.generate();
}

function findDefaultMenus(routes: RouteConfig[]): RouteConfig[] {
  return (
    routes.filter((route) => {
      console.log(route.name, config.firstMenuName);

      return config.firstMenuName === route.name;
    })[0]?.children || []
  );
}

Vue.use(VueRouter);

let routes: Array<RouteConfig> = generateRoutes(
  require.context("../views-template", true, /\.vue$/),
  true
);

const routesSetting: Array<RouteConfig> = generateRoutes(
  require.context("../views-setting", true, /\.vue$/),
  false
);

routes[0].redirect = "/home";

routes = [...routes, ...routesSetting];

// 设置默认菜单
store.commit("menus/setMenus", findDefaultMenus(routes));

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(beforeEachCombine);

export default router;

export { routes };
