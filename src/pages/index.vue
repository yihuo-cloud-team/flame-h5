<template>
  <div id="list">
    <van-list
      v-if="userInfo"
      v-model="loading"
      :finished="finished"
      finished-text="暂时没有更多了"
      @load="update()"
    >
      <div class="idea" v-for="(item,index) in list" :key="index">
        <div class="user">
          <img class="img" :src="!item.is_no_name?item.userInfo.wx_head:'/images/10.jpg'" alt />
          <div class="user-info">
            <div class="info">
              <div class="user-name">{{!item.is_no_name?item.userInfo.wx_name:'神秘人'}}</div>
              <div class="date">{{ item.add_time }}</div>
              <div class="idea-info">{{item.contact}}</div>
              <div class="thumbs-up">
                <div class="del" @click="del(item)" v-if="item.user_id==userInfo.id">
                  <van-icon name="delete" />
                </div>
                <div class="num">{{ item.up }}</div>
                <div class="icon-up" @click="zan(item)">
                  <van-icon name="good-job" v-if="item.isUp" />
                  <van-icon name="good-job-o" v-else />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </van-list>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>