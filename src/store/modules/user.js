import router from "@/router";
import { login, logout, getInfo } from "@/api/login";
import { getToken, setToken, removeToken } from "@/utils/auth";

const user = {
  state: {
    token: getToken(),
    name: "",
    avatar: "",
    roles: [],
    permissions: [],
    userinfo: {},
    status: false,
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    },
    SET_PERMISSIONS: (state, permissions) => {
      state.permissions = permissions;
    },
    SET_USERINFO: (state, userinfo) => {
      state.userinfo = userinfo;
    },
    SET_STATUS: (state, status) => {
      state.status = status;
    },
  },

  actions: {
    updateStatus({ commit }, status) {
      commit("SET_STATUS", status);
    },
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.manageMobile.trim();
      const password = userInfo.password;
      return new Promise((resolve, reject) => {
        login(username, password)
          .then(({ data: res }) => {
            let { AUTH_TOKEN } = res;
            setToken(AUTH_TOKEN);
            commit("SET_TOKEN", AUTH_TOKEN);
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    },

    // 获取用户信息
    GetInfo({ commit }) {
      return new Promise((resolve, reject) => {
        getInfo()
          .then(res => {
            const user = res.user;
            const avatar = !user.avatar
              ? require("@/assets/images/header-portrait.png")
              : user.avatar;
            if (res.roles && res.roles.length > 0) {
              // 验证返回的roles是否是一个非空数组
              commit("SET_ROLES", res.roles);
              commit("SET_PERMISSIONS", res.permissions);
            } else {
              commit("SET_ROLES", ["ROLE_DEFAULT"]);
            }
            commit("SET_AVATAR", avatar);
            commit("SET_USERINFO", user);
            resolve(res);
          })
          .catch(error => {
            reject(error);
          });
      });
    },

    // 退出系统
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        // logout(state.token)
        //   .then(() => {
        commit("SET_TOKEN", "");
        commit("SET_ROLES", []);
        commit("SET_PERMISSIONS", []);
        removeToken();
        sessionStorage.clear();
        resolve();
        // })
        // .catch(error => {
        //   reject(error);
        // });
      });
    },
  },
};

export default user;
