<template>
  <div id="help">
    <van-cell-group>
      <van-cell v-for="(item,index) in 10" :key="index" title="单元格" @click="$router.push(`/paper/info?id=${item.id}`)" is-link />
    </van-cell-group>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>