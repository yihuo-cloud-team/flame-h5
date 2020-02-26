<template>
  <div id="release">
    <div class="trends-box">
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
 @click="$router.push(`/task/info?task_id=${item.id}`)"
            v-for="item in list"
            :key="item"
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
                <div class="subtitle">{{item.add_time}} | {{item.join_num}}人报名</div>
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