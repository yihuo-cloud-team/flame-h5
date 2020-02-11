<template>
  <div id="home">
    <div class="search-box">搜索</div>
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
        <div class="item" v-for="i in 5" :key="i">
          <div class="panel">
            <img
              src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4000386096,2288866861&fm=26&gp=0.jpg"
              class="img"
            />
            <div class="panel-body">
              <div class="title">办公室网页开发</div>
              <div class="text">
                <div class="money">￥13,000</div>
                <div class="state">
                  <van-tag plain type="success" size="medium">招募中</van-tag>
                </div>
              </div>
              <div class="subtitle">1小时前发布 | 20人报名</div>
            </div>
          </div>
        </div>
      </div>
      <div class="trends-list erect">
        <van-list v-model="loading" :finished="finished" style=" width: 100%;" finished-text="没有更多了" @load="onLoad">
          <div class="item" @click="$router.push('/task/info')" v-for="item in list" :key="item" :title="item">
            <div class="panel">
              <img
                src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4000386096,2288866861&fm=26&gp=0.jpg"
                class="img"
              />
              <div class="panel-body">
                <div class="title-box">
                  <div class="title">办公室网页开发</div>
                  <div class="state">
                    <van-tag plain type="success" size="medium">招募中</van-tag>
                  </div>
                </div>
                <div class="text">
                  <div class="money">￥13,000</div>
                </div>
                <div class="subtitle">1小时前发布 | 20人报名</div>
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