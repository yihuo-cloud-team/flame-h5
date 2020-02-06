<template>
  <div class="default">
    <nuxt class="view-body" />
    <van-tabbar route v-model="active" :fixed="false" active-color="#55C7C7">
      <van-tabbar-item class="icon-1" replace to="/" icon="good-job"></van-tabbar-item>
      <van-tabbar-item class="icon-2" replace to="/idea/add" icon="add-square"></van-tabbar-item>
      <van-tabbar-item class="icon-3" replace to="/user/info" icon="manager"></van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  middleware: "auth",
  layout: "root",
  data() {
    return {
      active: 0
    };
  },
  mounted() {},
  methods: {},
  computed: {},
  watch: {
    $route(to) {},
    active(v) {}
  }
};
</script>
<style lang="scss" scoped>
@import "default.scss";
</style>
