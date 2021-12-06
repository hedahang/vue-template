<template>
  <div :class="classObj" class="app-wrapper">
    <sidebar
      :style="{
        backgroundColor: variables.menuBg,
      }"
    />
    <span>layout</span>
    <router-view />
  </div>
</template>
<script>
import { mapState } from "vuex";
import { Sidebar } from "./components";
import variables from "@/assets/styles/variables.less";
export default {
  components: { Sidebar },
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
