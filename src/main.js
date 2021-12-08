import Vue from "vue";
import "babel-polyfill";

import "normalize.css/normalize.css"; // A modern alternative to CSS resets
import "animate.css/animate.min.css";

import ElementUI from "element-ui";
// import "element-ui/lib/theme-chalk/index.css";
// import "@/assets/styles/theme/index.css"; // 自定义elementUI主题颜色
import "@/assets/styles/element-variables.scss";

import "@/assets/styles/index.less"; // 全局样式
import "@/assets/styles/overwrite.css";

import permission from "./directive/permission"; // 自定义指令

import "./assets/icons"; // icon
import "./permission"; // permission control

// 全局组件挂载
import "@/components/globalComponents"; // 基础组件自动挂载

// 引入rem
import "@/assets/js/rem";

import { getServerConfig } from "./config";

import App from "./App.vue";
import router from "./router";
import store from "./store";

// 使用Vue.use()方法就会调用工具方法中的install方法
Vue.use(permission);
Vue.use(ElementUI);

Vue.config.productionTip = false;

getServerConfig().then(config => {
  console.log("config", config);
  new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount("#app");
});
