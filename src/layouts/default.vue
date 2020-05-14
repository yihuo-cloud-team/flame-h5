<template>
  <div class="default">
    <nuxt class="view-body" />
    <van-tabbar route v-model="active" :fixed="false" active-color="#4289DB">
      <van-tabbar-item replace to="/" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/task/list" icon="fire-o">动态</van-tabbar-item>
      <van-tabbar-item replace to="/chat/room" icon="chat-o">消息列表</van-tabbar-item>
      <van-tabbar-item replace to="/user/info" icon="manager">我的</van-tabbar-item>
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
