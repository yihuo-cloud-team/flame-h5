<template>
  <div id="list">
    <div class="list">
      <div class="item" @click="$router.push(`/paper/info?id=${item.id}`)" v-for="(item,index) in list" :key="index" >
        <div class="top" v-if="item.first_img!=''">
          <img
            :src="$getUrl(item.first_img)"
            alt
          />
   
        </div>
        <div class="bottom">
          <div class="item-title">{{item.title}}</div>
          <div class="item-time">{{item.add_time}}</div>
          <div class="item-info">{{item.sub_title}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>