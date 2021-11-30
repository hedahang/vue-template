import Vue from "vue";
import "babel-polyfill";

import "normalize.css/normalize.css"; // A modern alternative to CSS resets
import "animate.css/animate.min.css";

import ElementUI from "element-ui";
// import "element-ui/lib/theme-chalk/index.css";
import "@/assets/styles/theme/index.css";

import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
