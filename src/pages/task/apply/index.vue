<template>
  <div id="apply">
    <div class="trends-box">
      <div class="trends-list erect">
        <van-list v-model="loading" :finished="finished" style=" width: 100%;" @load="update">
          <div
            class="item"
            @click="$router.push(`/task/info?task_id=${item.id}`)"
            v-for="(item,index) in list"
            :key="index"
            :title="item"
          >
            <div class="panel">
              <div class="box-img">
                <div class="img" :style="`background-image: url(${$getUrl(item.img)});`"></div>
              </div>
              <div class="panel-body">
                <div class="title-box">
                  <div class="title">{{item.task_name}}</div>
                  <div class="state">
                    <template v-if="item.state==1">
                      <template v-if="item.is_up==0">
                        <van-tag plain type="success" size="medium">已下架</van-tag>
                      </template>
                      <template v-if="item.is_up==1">
                        <van-tag plain type="success" size="medium" v-if="item.task_state==0">招募中</van-tag>
                        <van-tag plain type="success" size="medium" v-if="item.task_state==2">进行中</van-tag>
                        <van-tag plain type="success" size="medium" v-if="item.task_state==3">中止</van-tag>
                        <van-tag plain type="success" size="medium" v-if="item.task_state==4">完成</van-tag>
                        <van-tag plain type="success" size="medium" v-if="item.task_state==5">待验收</van-tag>
                        <van-tag plain type="success" size="medium" v-if="item.task_state==6">失败</van-tag>
                      </template>
                    </template>
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