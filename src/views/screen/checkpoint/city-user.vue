<template>
  <div class="screen-city-user">
    <span>防控圈用户</span>
    <el-switch :value="status" @change="changeOnline"></el-switch>
    <el-button class="test" @click="toggle">切换状态</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      test: true,
    };
  },
  computed: {
    status: {
      set(val) {
        this.$store.dispatch("updateStatus", val);
      },
      get() {
        return this.$store.state.user.status;
      },
    },
  },
  methods: {
    changeOnline(val) {
      console.log("change", val);
      // this.status = !this.status;
    },
    toggle() {
      this.status = !this.status;
    },
  },
};
</script>
