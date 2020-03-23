<template>
  <div id="home">
    <div class="search-box" @click="$router.push('/search')">
      <van-icon name="search" size="18"></van-icon>
      {{info?info:""}}
    </div>

    <div class="trends-box">
      <div class="title1" v-if="moveList.length>0">项目动态</div>
      <div class="trends-list">
        <div
          class="item"
          v-for="(i,index) in moveList"
          @click="$router.push(`/task/info?task_id=${i.id}`)"
          :key="index"
        >
          <div class="panel">
            <img :src="$getUrl(i.img)" class="img" />
            <div class="panel-body">
              <div class="title">{{i.task_name}}</div>
              <div class="text">
                <div class="money">￥{{i.price}}</div>
                <div class="state">
                  <van-tag plain type="success" size="medium" v-if="i.task_state==0">招募中</van-tag>
                  <van-tag plain type="success" size="medium" v-if="i.task_state==2">开发中</van-tag>
                  <van-tag plain type="success" size="medium" v-if="i.task_state==4">完成</van-tag>
                </div>
              </div>
              <div class="subtitle">{{$handleTime(i.add_time)}} | {{i.join_num}}人报名</div>
            </div>
          </div>
        </div>
      </div>
      <div class="title1" v-if="list.length>0">任务列表</div>
      <div class="trends-list1 erect">
        <van-list v-model="loading" :finished="finished" style=" width: 100%;" @load="update">
          <div @click="$router.push(`/task/info?task_id=${item.id}`)" v-for="(item,index) in list" class="item"  :key="index" :title="item"
          >
            <div class="panel">
              <img :src="$getUrl(item.img)" class="img" />
              <div class="panel-body">
                <div class="title-box">
                  <div class="title">{{item.task_name}}</div>
                  <div class="state">
                    <van-tag plain type="success" size="medium" v-if="item.task_state==0">招募中</van-tag>
                    <van-tag plain type="success" size="medium" v-if="item.task_state==2">开发中</van-tag>
                    <van-tag plain type="success" size="medium" v-if="item.task_state==4">完成</van-tag>
                  </div>
                </div>
                <div class="text">
                  <div class="money">￥{{item.price}}</div>
                </div>
                <div class="subtitle">{{$handleTime(item.add_time)}} | {{item.join_num}}人报名</div>
              </div>
            </div>
          </div>
        </van-list>
      </div>
       <van-divider v-if="finished">没有更多了</van-divider>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>