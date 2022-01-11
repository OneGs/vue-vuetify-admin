export interface LayoutStore {
  isHover: boolean; // 是否采用悬浮模式

  miniVariant: boolean; // 是否展开

  scaleIcon: boolean; // 是否需要改变菜单信息
}

const state: LayoutStore = {
  isHover: false,

  miniVariant: false,

  scaleIcon: false,
};

const mutations = {
  setHover: (state: LayoutStore) => {
    state.isHover = !state.isHover;
  },

  setMiniVariant: (state: LayoutStore) => {
    state.miniVariant = !state.miniVariant;
  },

  setScaleIcon: (state: LayoutStore) => {
    state.scaleIcon = state.miniVariant;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
