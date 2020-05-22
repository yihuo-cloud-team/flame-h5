<template>
  <div id="home">
    <div id="top-search-box">
      <div class="search-box" @click="$router.push('/search')">
        <van-icon name="search" size="18"></van-icon>
        {{info?info:""}}
      </div>
    </div>

    <ol-icon-nav class="icon-nav" @fnc="routers" :list="classList"></ol-icon-nav>

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
            <div class="box-img">
              <div class="img" :style="`background-image: url(${$getUrl(i.img)});`"></div>
            </div>

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
          <task-card :info='item' class="item" @click="$router.push(`/task/info?task_id=${item.id}`)" v-for="(item,index) in list" :key="index" :title="item"></task-card>
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