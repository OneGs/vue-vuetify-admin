import { RouteConfig } from "vue-router";

export interface MenusStore {
  menus?: RouteConfig;
}

const state: MenusStore = {
  menus: undefined,
};

const mutations = {
  setMenus(state: MenusStore, menus: RouteConfig): void {
    state.menus = menus;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
