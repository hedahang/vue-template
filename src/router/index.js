import Vue from "vue";
import VueRouter from "vue-router";

import Screen from "../views/screen/index.vue";

Vue.use(VueRouter);
// 公共路由
const constantRoutes = [
  {
    path: "/",
    redirect: "/screen/checkpoint",
    hidden: true,
  },
  {
    path: "/login",
    component: resolve => require(["@/views/login"], resolve),
    hidden: true,
  },
  {
    path: "/404",
    component: () =>
      import(/* webpackChunkName: "error" */ "../views/erp/error/404.vue"),
    hidden: true,
  },
  {
    path: "/401",
    component: () =>
      import(/* webpackChunkName: "error" */ "../views/erp/error/401.vue"),
    hidden: true,
  },
  {
    path: "/screen",
    name: "Screen",
    component: Screen,
    meta: {
      title: "大屏",
    },
    hidden: true,
    children: [
      {
        path: "checkpoint",
        name: "ScreenCheckpoint",
        component: () => import("../views/screen/checkpoint/index.vue"),
        meta: {
          title: "检查站大屏",
        },
      },
      {
        path: "fkq",
        name: "ScreenFkq",
        component: () => import("../views/screen/fkq/index.vue"),
        meta: {
          title: "防控圈大屏",
        },
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  // mode: "history", // 去掉url中的#
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes,
});

export default router;
