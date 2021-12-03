import Vue from "vue";
import Vuex from "vuex";

import user from "./modules/user";
import permission from "./modules/permission";

import getters from "./getters";

Vue.use(Vuex);

let modules = {
  user,
  permission,
};

export default new Vuex.Store({
  modules,
  getters,
});
