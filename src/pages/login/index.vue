<template>
  <div id="login">
    <p class="text">欢迎登录益火TKI</p>
    <van-empty description="请先阅读用户协议" v-if="$route.query['code']">
      <van-checkbox v-model="checked">
        请先仔细阅读
        <span @click="isShow=true" class="ment">《益火TKI网服务协议》</span>
      </van-checkbox>
      <van-button :disabled="!checked" block type="danger" class="bottom-button" @click="login()">登陆</van-button>
    </van-empty>
    <van-popup v-model="isShow" closeable close-icon="close" position="bottom">
      <o-Agreement></o-Agreement>
      <van-button block type="danger" @click="isShow=false">确认</van-button>
    </van-popup>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>
