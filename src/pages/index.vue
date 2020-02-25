<template>
  <div id="home">
    <div class="search-box" @click="$router.push('/search')">搜索</div>
    <div class="screen-box">
      <van-dropdown-menu>
        <van-dropdown-item v-model="screen1" :options="option1" />
        <van-dropdown-item v-model="screen2" :options="option2" />
        <van-dropdown-item v-model="screen3" :options="option3" />
      </van-dropdown-menu>
    </div>
    <div class="trends-box">
      <div class="title">项目动态</div>
      <div class="trends-list">
        <div class="item" v-for="(i,index) in moveList" @click="$router.push('/task/info')" :key="index">
          <div class="panel">
            <img
              src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4000386096,2288866861&fm=26&gp=0.jpg"
              class="img"
            />
            <div class="panel-body">
              <div class="title">{{i.name}}</div>
              <div class="text">
                <div class="money">￥{{i.price}}</div>
                <div class="state">
                  <van-tag plain type="success" size="medium" v-if="i.task_state==0">招募中</van-tag>
                  <van-tag plain type="success" size="medium" v-if="i.task_state==2">进行中</van-tag>
                  <van-tag plain type="success" size="medium" v-if="i.task_state==3">中止</van-tag>
                  <van-tag plain type="success" size="medium" v-if="i.task_state==4">完成</van-tag>
                </div>
              </div>
              <div class="subtitle"> {{i.add_time}} | 20人报名</div>
            </div>
          </div>
        </div>
      </div>
      <div class="trends-list erect">
        <van-list
          v-model="loading"
          :finished="finished"
          style=" width: 100%;"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <div
            class="item"
            @click="$router.push('/task/info')"
            v-for="(item,index) in list"
            :key="index"
            :title="item"
          >
            <div class="panel">
              <img
                src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4000386096,2288866861&fm=26&gp=0.jpg"
                class="img"
              />
              <div class="panel-body">
                <div class="title-box">
                  <div class="title">{{item.name}}</div>
                  <div class="state">
                     <van-tag plain type="success" size="medium" v-if="item.task_state==0">招募中</van-tag>
                  <van-tag plain type="success" size="medium" v-if="item.task_state==2">进行中</van-tag>
                  <van-tag plain type="success" size="medium" v-if="item.task_state==3">中止</van-tag>
                  <van-tag plain type="success" size="medium" v-if="item.task_state==4">完成</van-tag>
                  </div>
                </div>
                <div class="text">
                  <div class="money">￥{{item.price}}</div>
                </div>
                <div class="subtitle">{{item.add_time}} | 20人报名</div>
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