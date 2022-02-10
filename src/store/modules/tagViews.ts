import { Route } from "vue-router/types/router";
import { ActionContext } from "vuex";
import { LoopAny } from "@/types/common";

interface ViewState {
  cachedViews: string[];
}

const state: ViewState = {
  cachedViews: [],
};

const mutations = {
  ADD_CACHED_VIEW: (state: ViewState, view: Route): void => {
    if (!view.name || state.cachedViews.includes(view.name)) return;

    if (view.meta && view.meta.keepAlive) {
      state.cachedViews.push(view.name);
    }
  },

  DEL_CACHED_VIEW: (state: ViewState, view: Route): void => {
    if (!view.name) return;

    const index = state.cachedViews.indexOf(view.name);

    index > -1 && state.cachedViews.splice(index, 1);
  },

  DEL_OTHERS_CACHED_VIEWS: (state: ViewState, view: Route): void => {
    if (!view.name) return;

    const index = state.cachedViews.indexOf(view.name);

    if (index > -1) {
      state.cachedViews = state.cachedViews.slice(index, index + 1);
    } else {
      // if index = -1, there is no cached tags
      state.cachedViews = [];
    }
  },

  DEL_ALL_CACHED_VIEWS: (state: ViewState): void => {
    state.cachedViews = [];
  },
};

const actions = {
  addCachedView(
    { commit }: ActionContext<ViewState, LoopAny>,
    view: Route
  ): void {
    commit("ADD_CACHED_VIEW", view);
  },

  delCachedView(
    { commit, state }: ActionContext<ViewState, LoopAny>,
    view: Route
  ): Promise<string[]> {
    return new Promise((resolve) => {
      commit("DEL_CACHED_VIEW", view);
      resolve([...state.cachedViews]);
    });
  },

  delOthersCachedViews(
    { commit, state }: ActionContext<ViewState, LoopAny>,
    view: Route
  ): Promise<string[]> {
    return new Promise((resolve) => {
      commit("DEL_OTHERS_CACHED_VIEWS", view);
      resolve([...state.cachedViews]);
    });
  },

  delAllCachedViews({
    commit,
    state,
  }: ActionContext<ViewState, LoopAny>): Promise<string[]> {
    return new Promise((resolve) => {
      commit("DEL_ALL_CACHED_VIEWS");
      resolve([...state.cachedViews]);
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
