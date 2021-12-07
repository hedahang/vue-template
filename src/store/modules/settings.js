import variables from "@/assets/styles/element-variables.scss";

const storageSetting = JSON.parse(localStorage.getItem("layout-setting")) || "";
const state = {
  title: "检查站管理系统",
  theme: storageSetting.theme || variables.theme,
  sideTheme: "theme-dark",
  sidebarLogo: false,
};

const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    if (Object.prototype.hasOwnProperty.call(state, key)) {
      state[key] = value;
    }
  },
};

const actions = {
  // 设置网页标题
  setTitle({ commit }, title) {
    commit("CHANGE_SETTING", { key: "title", value: title });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
