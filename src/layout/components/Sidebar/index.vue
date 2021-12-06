<template>
  <div
    class="has-logo sidebar-container"
    :style="{
      backgroundColor: variables.menuBg,
      paddingLeft: !isCollapse ? '10px' : '0',
      paddingRight: !isCollapse ? '10px' : '0',
    }"
  >
    <logo :collapse="isCollapse" />
    <el-scrollbar :class="settings.sideTheme" wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="
          settings.sideTheme === 'theme-dark'
            ? variables.menuBg
            : variables.menuLightBg
        "
        :text-color="
          settings.sideTheme === 'theme-dark'
            ? variables.menuText
            : 'rgba(0,0,0,.65)'
        "
        :unique-opened="true"
        :active-text-color="settings.theme"
        :collapse-transition="false"
        mode="vertical"
        ><sidebar-item
          v-for="(route, index) in sidebarRouters"
          :key="route.path + index"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
    sidebar
  </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";
import Logo from "./Logo";
import SidebarItem from "./SidebarItem";
import variables from "@/assets/styles/variables.less";
export default {
  components: { Logo, SidebarItem },
  computed: {
    ...mapState(["settings"]),
    ...mapGetters(["sidebarRouters", "sidebar"]),
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
    variables() {
      return variables;
    },
    isCollapse() {
      return !this.sidebar.opened;
    },
  },
};
</script>
