<template>
  <div class="ol-icon-nav">

    <van-swipe class="my-swipe" :loop="false" indicator-color="#FED363">
      <van-swipe-item :class="list.length>=10?'paddingBottom30':''">
        <van-grid icon-size="12vw" :border="false" square :column-num="5">
          <template  v-for="(i,index) in list">
            <van-grid-item @click="tiaozhuang(i)" v-if="index<10" :key="index" :icon="$getUrl(i.icon)" :text="i.name"></van-grid-item>
          </template>
        </van-grid>
      </van-swipe-item>
      <van-swipe-item v-if="list.length>=10">
        <van-grid icon-size="12vw" :border="false" square :column-num="5">
          <template v-for="(i,index) in list">
            <van-grid-item @click="tiaozhuang(i.id)" :key="index" :icon="$getUrl(i.icon)" :text="i.name"></van-grid-item>
          </template>
        </van-grid>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script src="./OlIconNav.js"></script>
<style lang="scss" scoped>
@import "OlIconNav.scss";
</style>