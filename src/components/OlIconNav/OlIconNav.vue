<template>
  <div class="ol-icon-nav">

    <van-swipe class="my-swipe" :loop="false" indicator-color="#FED363">
      <van-swipe-item v-for="(item,i) in showList" :key='i' :class="list.length>=10?'paddingBottom30':''">
        <van-grid icon-size="12vw" :border="false" square :column-num="5">
          <template  v-for="(todo,n) in item">
            <van-grid-item @click="tiaozhuang(todo)" :key="n" :icon="$getUrl(todo.icon)" :text="todo.name"></van-grid-item>
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