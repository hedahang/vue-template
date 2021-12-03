<template>
  <div class="entrance">
    <div
      class="checkpoint"
      v-if="accountType == 'CITY_USER' || accountType == 'ADMIN'"
    >
      防控圈首页
    </div>
    <div v-else>检查站首页</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      test: 1,
    };
  },
  computed: {
    accountType() {
      return this.$store.getters.accountType || "ADMIN";
    },
  },
};
</script>
