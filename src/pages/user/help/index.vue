<template>
  <div id="help">
    <van-cell-group>
      <van-cell
        v-for="(item,index) in list"
        :key="index"
        :title="item.title"
        @click="$router.push(`/paper/info?id=${item.id}`)"
        is-link
      />
    </van-cell-group>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>