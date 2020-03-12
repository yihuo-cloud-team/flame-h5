<template>
  <div id="search">
    <div class="search-box">
      <div class="icon" @click="show=true">
        <van-icon name="location" size="20" />
        {{district}}
      </div>
      <div class="input">
        <van-field style="width: 100%;" v-model="query.search" :placeholder="info" />
      </div>
      <div class="btn" @click="search">筛选</div>
    </div>
    <div class="state-box">
      <van-dropdown-menu>
        <van-dropdown-item v-model="query.task_type" :options="option1" @change="search" />
        <van-dropdown-item v-model="query.task_state" :options="option2" @change="search" />
      </van-dropdown-menu>
    </div>
    <div class="trends-box">
      <div class="trends-list erect">
        <van-list
          v-model="loading"
          :finished="finished"
          style=" width: 100%;"

          @load="update"
        >
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
                    <van-tag plain type="success" size="medium" v-if="item.task_state==0">招募中</van-tag>
                    <van-tag plain type="success" size="medium" v-if="item.task_state==2">进行中</van-tag>
                    <van-tag plain type="success" size="medium" v-if="item.task_state==3">中止</van-tag>
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
          <van-divider  v-if="finished">没有更多了</van-divider>
    </div>
    <van-popup v-model="show" position="bottom">
      <van-area :area-list="areaList" @confirm="confirm" @cancel="cancel" :value="Areaval" />
    </van-popup>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>