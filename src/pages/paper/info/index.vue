<template>
  <div id="info">
    <div class="title">{{info.title}}</div>
    <div class="time">{{info.add_time}}</div>
    <div class="info" v-html="info.content"></div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>