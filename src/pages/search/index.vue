<template>
  <div id="search">
    <div class="search-box">
      <div class="icon" @click="show=true">
        <van-icon name="location" size="20" />
        {{district}}
      </div>
      <div class="input">
        <van-field style="width: 100%;" v-model="query.search" />
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
        <van-list v-model="loading" :finished="finished" style=" width: 100%;" @load="update">
          <task-card :info='item' class="item" v-for="(item,index) in list" :key="index" :title="item"></task-card>
        </van-list>
      </div>
      <van-divider v-if="finished">没有更多了</van-divider>
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