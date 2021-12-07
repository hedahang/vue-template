<template>
  <div :class="classObj" class="app-wrapper">
    <!-- 头部导航栏 -->
    <PageHeader></PageHeader>
    <!-- 菜单栏 -->
    <sidebar
      :style="{
        backgroundColor: variables.menuBg,
      }"
    />
    <!-- 主题内容 -->
    <div class="main-container">
      <app-main />
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { Sidebar, PageHeader, AppMain } from "./components";
import variables from "@/assets/styles/variables.less";
export default {
  components: { Sidebar, PageHeader, AppMain },
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar,
    }),
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
      };
    },
    variables() {
      return variables;
    },
  },
};
</script>
<style lang="less">
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  color: #fff;
  background: #000225;
}
</style>
