import Vue from "vue";
import axios from "axios";

// 获取项目动态全局配置
export const getServerConfig = async () => {
  let $config = {};
  return axios({
    baseURL: "",
    method: "get",
    url:
      process.env.NODE_ENV === "production"
        ? "/serverConfig.json"
        : "/serverConfig.json",
  })
    .then(({ data: config }) => {
      // 自动注入项目配置
      if ($config && typeof config === "object") {
        $config = Object.assign($config, config);
        // 设置全局配置
        Vue.prototype.$config = $config;
        // 设置全局baseURL
        Vue.prototype.$baseUrl = $config.BaseURL;
      }
      return $config;
    })
    .catch(() => {
      throw "请在public文件夹下添加serverConfig.json配置文件";
    });
};
