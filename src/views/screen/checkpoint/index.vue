<template>
  <div class="entrance">
    <cityUser
      class="checkpoint"
      v-if="accountType == 'CITY_USER' || accountType == 'ADMIN'"
    >
      防控圈首页
    </cityUser>
    <div v-else>检查站首页</div>
  </div>
</template>
<script>
import cityUser from "./city-user.vue";
export default {
  components: { cityUser },
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
