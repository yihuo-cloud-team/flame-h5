<template>
  <div id="user">
    <div class="user-info">
      <div class="info-image">
        <img class="img" :src="$getUrl(userInfo.wx_head)" />
      </div>
      <div class="user-name">{{userInfo.wx_name}}</div>
    </div>
    <div class="btn" @click="signOut">退出登录</div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>