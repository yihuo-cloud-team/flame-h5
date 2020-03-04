<template>
  <div id="ranking">
    <!-- <van-tabs @click="select1" title-active-color="#4289DB" color="#4289DB" v-model="active">
      <van-tab title="已完成排行榜"></van-tab>
      <van-tab title="已发布排行榜"></van-tab>
    </van-tabs>-->
    <div class="select">
      <div class="left">
        <span :class="active==0?'span':'span1'" @click="select1">已完成任务排行榜</span>
        <div :class="active==0?'active':'active1'"></div>
      </div>
      <div class="left" style="margin-left:10px">
        <span :class="active==1?'span':'span1'" @click="select2">已发布排行榜</span>
        <div :class="active==1?'active':'active1'"></div>
      </div>
    </div>
    <div class="top">
      <div class="title">{{name}}</div>
      <div class="box">
        <div class="box-flex">
          <div class="box-num" v-show="active==0">{{finish_num.finish_num}}</div>
          <div class="box-num" v-show="active==1">{{publish_num.publish_num}}</div>
          <div class="box-wancheng" v-show="active==0">完成任务数</div>
          <div class="box-wancheng" v-show="active==1">我发布的任务</div>

          <span class="box-ranking" v-show="active==0">No.{{finish_num.rank}}</span>
          <span class="box-ranking" v-show="active==1">No.{{publish_num.rank}}</span>
        </div>
        <div class="box-flex">
          <div class="box-num" v-show="active==0">{{finish_money.finish_money}}</div>
          <div class="box-num" v-show="active==1">{{publish_money.publish_money}}</div>
          <div class="box-wancheng" v-show="active==0">完成任务收入</div>
          <div class="box-wancheng" v-show="active==1">我发布的总金额</div>
          <span class="box-ranking" v-show="active==0">No.{{finish_money.rank}}</span>
          <span class="box-ranking" v-show="active==1">No.{{publish_money.rank}}</span>
        </div>
      </div>
    </div>
    <!-- <van-tabs v-model="active1" @click="select" title-active-color="#4289DB" color="#4289DB">
      <template v-if="active==0">
        <van-tab title="按已完成排序"></van-tab>
        <van-tab title="按总收入排序"></van-tab>
      </template>
      <template v-if="active==1">
        <van-tab title="按发布数量排序"></van-tab>
        <van-tab title="按总金额排序"></van-tab>
      </template>
    </van-tabs>-->
    <div class="select1">
      <div v-if="active==0" @click="select3" class="left">
        <span :class="active1==0?'span':'span1'">按已完成排序</span>
        <div :class="active1==0?'active':'active1 '"></div>
      </div>
      <div class="left" @click="select4" v-if="active==0">
        <span :class="active1==1?'span':'span1'">按总收入排序</span>
        <div :class="active1==1?'active':'active1'"></div>
      </div>

      <div class="left" @click="select3" v-if="active==1">
        <span :class="active1==0?'span':'span1'">按发布数量排序</span>
        <div :class="active1==0?'active':''"></div>
      </div>
      <div class="left" @click="select4" v-if="active==1">
        <span :class="active1==1?'span':'span1'">按总金额排序</span>
        <div :class="active1==1?'active':''"></div>
      </div>
    </div>
    <div class="bottom">
      <div class="list-box">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <div class="list">
            <div class="item" v-for="(item,index) in list" :key="index">
              <!-- <div class="left">{{index+1}}</div> -->
              <div class="left" v-if="index==0">
                <img src="/images/1.png" alt />
              </div>
              <div class="left" v-else-if="index==1">
                <img src="/images/2.png" alt />
              </div>
              <div class="left" v-else-if="index==2">
                <img src="/images/3.png" alt />
              </div>
              <div class="left" v-else>{{index+1}}</div>

              <img class="img" :src="item.head_img" alt />
              <div class="right">
                <div class="right-top">{{item.name}}</div>
                <div class="right-bottom">
                  <div class="zuo">
                    <div v-show="active==0">完成数:{{item.finish_num}}</div>
                    <div v-show="active==1">发布数:{{item.publish_num}}</div>
                  </div>
                  <div class="you">
                    <div v-show="active==0">总收入:{{item.finish_money}}</div>
                    <div v-show="active==1">总发布额:{{item.publish_money}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </van-list>
      </div>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>