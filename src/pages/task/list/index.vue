<template>
  <div id="list">
    <div class="trends-list erect">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        style=" width: 100%;"
        @load="onLoad()"
      >
        <div class="item" v-for="(item,index) in list" @click="$router.push('/task/info')" :key="index" :title="item">
          <div class="panel" v-if="item.task_state==0">
            <img
            :src="$getUrl(item.img)"
              class="img"
            />
              <div class="panel-body">
              <div class="title">{{item.name}}</div>
              <div class="text">
                <div class="money">￥{{item.price}}</div>
                <div class="state">
                  <van-tag plain type="success" size="medium" v-if="item.task_state==0">招募中</van-tag>
                  <van-tag plain type="success" size="medium" v-if="item.task_state==2">进行中</van-tag>
                  <van-tag plain type="success" size="medium" v-if="item.task_state==3">中止</van-tag>
                  <van-tag plain type="success" size="medium" v-if="item.task_state==4">完成</van-tag>
                </div>
              </div>
              <div class="subtitle">{{item.add_time}} | {{item.join_num}}人报名</div>
            </div>
          </div>
        </div>
      </van-list>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>