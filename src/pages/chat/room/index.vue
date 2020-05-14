<template>
  <div id="room">
    <div class="card" v-for="item in list" :key="item.id" @click="go(item.room_id)">
      <div class="left">
        <van-image radius="5" width="50" height="50" :src="$getUrl(item.userInfo.head_img)" />
        <div class="no" v-if="getNoCount(item.room_id)>0">{{getNoCount(item.room_id)}}</div>
      </div>
      <div class="center">
        <div class="title">{{item.userInfo.name}}</div>
        <div class="content">{{item.lastContent?item.lastContent.msg:'暂无消息'}}</div>
      </div>
      <div class="right">
        <div class="time" v-if="item.lastContent">{{item.lastContent.add_time | timeToRe}}</div>
        <div class="time" v-else>{{' '}}</div>
      </div>
    </div>
    <div v-if="total==0">
      <van-empty description="您还没有消息" />
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>