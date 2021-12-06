import Vue from "vue";
import Vuex from "vuex";

import app from "./modules/app";
import permission from "./modules/permission";
import user from "./modules/user";
import settings from "./modules/settings";

import getters from "./getters";

Vue.use(Vuex);

let modules = {
  app,
  user,
  settings,
  permission,
};

export default new Vuex.Store({
  modules,
  getters,
});
