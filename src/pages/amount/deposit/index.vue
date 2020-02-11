<template>
  <div id="deposit">
    <div class="title">托管金额</div>
    <div class="amount">￥ {{this.$route.query.quota}}</div>
    <div class="btn" @click="submit">确认托管</div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>