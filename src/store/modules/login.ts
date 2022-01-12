export interface LoginStore {
  isRemember: boolean;
  accessToken: string;
}

const [ACCESS_TOKEN, IS_REMEMBER] = ["ACCESS_TOKEN", "IS_REMEMBER"];

const state: LoginStore = {
  accessToken: localStorage.getItem(ACCESS_TOKEN) || "",
  isRemember: localStorage.getItem(IS_REMEMBER)
    ? JSON.parse(localStorage.getItem(IS_REMEMBER) as string)
    : false,
};

const getters = {
  isLogin: (state: LoginStore): boolean => !!state.accessToken,
};

const mutations = {
  setToken(state: LoginStore, token: string): void {
    state.accessToken = token;

    localStorage.setItem(ACCESS_TOKEN, state.accessToken);
  },

  setRemember(state: LoginStore, status: boolean): void {
    state.isRemember = status;

    localStorage.setItem(IS_REMEMBER, state.isRemember.toString());
  },

  clear(state: LoginStore): void {
    state.accessToken = "";
    state.isRemember = false;
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(IS_REMEMBER);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
};
