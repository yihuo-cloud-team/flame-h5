<template>
  <div id="ranking">
    <van-tabs @click="select" title-active-color="#4289DB" color='#4289DB' v-model="active">
      <van-tab title="已完成排行榜"></van-tab>
      <van-tab title="已发布排行榜"></van-tab>
    </van-tabs>
    <div class="top">
      <div class="title">{{name}}</div>
      <div class="box">
        <div class="box-flex">
          <div class="box-num" v-show="active==0">{{finish_num.finish_num}}</div>
          <div class="box-num" v-show="active==1">{{publish_num.publish_num}}</div>
          <div class="box-wancheng" v-show="active==0">完成任务数</div>
          <div class="box-wancheng" v-show="active==1">我发布的任务</div>
          <van-tag class="box-ranking" plain color="blue" v-show="active==0">No.{{finish_num.rank}}</van-tag>
          <van-tag class="box-ranking" plain color="blue" v-show="active==1">No.{{publish_num.rank}}</van-tag>
        </div>
        <div class="box-flex">
          <div class="box-num" v-show="active==0">{{finish_money.finish_money}}</div>
          <div class="box-num" v-show="active==1">{{publish_money.publish_money}}</div>
          <div class="box-wancheng" v-show="active==0">完成任务收入</div> 
          <div class="box-wancheng" v-show="active==1">我发布的总金额</div>
          <van-tag
            class="box-ranking"
            plain
            v-show="active==0"
            color="blue"
          >No.{{finish_money.rank}}</van-tag>
          <van-tag
            class="box-ranking"
            plain
            v-show="active==1"
            color="blue"
          >No.{{publish_money.rank}}</van-tag>
        </div>
      </div>
    </div>
    <van-tabs v-model="active1" @click="select" title-active-color="#4289DB" color='#4289DB'>
      <van-tab v-if="active==1" title="按发布数量排序"></van-tab>
      <van-tab v-if="active==1" title="按总金额排序"></van-tab>
      <van-tab v-if="active==0" title="按已完成排序"></van-tab>
      <van-tab v-if="active==0" title="按总收入排序"></van-tab>
    </van-tabs>
    <div class="bottom">
      <div class="list-box">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <div class="list">
            <div class="item" v-for="(item,index) in list" :key="index">
              <div class="left">{{index+1}}</div>
              <img class="img" :src='item.head_img' alt />
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