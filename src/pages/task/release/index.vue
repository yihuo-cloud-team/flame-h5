<template>
  <div id="release">
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
              <img :src="$getUrl(item.img)" class="img" />
              <div class="panel-body">
                <div class="title-box">
                  <div class="title">{{item.task_name}}</div>
                  <div class="state">
                    <template v-if="item.task_state==1">
                      <van-tag plain type="success" size="medium">待支付</van-tag>
                    </template>
                    <template v-else>
                      <template v-if="item.state==0">
                        <van-tag plain type="success" size="medium">等待审核</van-tag>
                      </template>
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
                      <template v-if="item.state==2">
                        <van-tag plain type="success" size="medium">审核失败</van-tag>
                      </template>
                    </template>
                  </div>
                </div>
                <div class="text">
                  <div class="money">￥{{item.price}}</div>
                </div>
                <div class="subtitle">{{$handleTime(item.add_time)}} | {{item.join_num}}人报名</div>
                <template v-if="item.state==2">
                  <div style="color:red;font-size:12px">驳回原因:{{item.remarks}}</div>
                </template>
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