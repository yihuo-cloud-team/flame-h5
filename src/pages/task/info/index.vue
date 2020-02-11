<template>
  <div id="info">
    <div class="head">
      <div class="head-body">
        <div class="title-box">
          <div class="title">办公室网页开发</div>
          <div class="state">
            <van-tag plain type="success" size="medium">招募中</van-tag>
          </div>
        </div>
        <div class="type">开发</div>
        <div class="cost">周期 30 天 | 金额 ￥13,000</div>
        <div class="partake">
          <div class="number">报名人数：15</div>
          <div
            class="fabulous"
            @click="state = !state"
            :style="[{'color': state?'rgba(65, 135, 219, 1)':''}]"
          >
            <van-icon name="good-job-o" style="margin-right: 5px;" size="16px" />赞 999
          </div>
        </div>
      </div>
    </div>
    <div class="body">
      <div class="title" style="margin-bottom: 25px;">任务信息</div>
      <div
        class="text"
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      <div class="title" style="margin-bottom: 35px;">备注</div>
      <div class="title" style="margin-bottom: 6px;">联系方式</div>
      <div class="contact">
        <div class="phone">***********</div>
        <div style=" color: rgba(66, 137, 219, 1);">查看</div>
      </div>
    </div>
    <div class="enlist-body">
      <div class="title">已报名</div>
      <div class="enlist-list">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          style=" width: 100%;"
          @load="onLoad"
        >
          <div class="item" v-for="item in list" :key="item" :title="item">
            <div class="head">
              <img
                class="img"
                src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4016333918,4269266815&fm=26&gp=0.jpg"
                alt
              />
              <div class="info">
                <div class="name">报名人</div>
                <div class="time">2020年3月31日报名</div>
              </div>
              <div class="btn-box">
                <div class="btn">选他</div>
              </div>
            </div>
            <div
              class="text"
            >用户描述自己的特点的文案用户描述自己的特点的文案用户描述自己的特点的文案用户描述自己的特点的文案用户描述自己的特点的文案用户描述自己的特点的文案用户描述自己的特点的文案用户描述自己的特点的文案用户描述自己的特点的文案用户描述自己的特点的文案用户描述自己的特点的文案用户描述自己的特点的文案用户描述自己的特点的文案</div>
          </div>
        </van-list>
      </div>
    </div>
    <div class="footer">
      <div class="help">
        <div class="help-btn">
          <van-icon size="18px" style="margin-right: 10px;" name="question-o" />帮助
        </div>
      </div>
      <div class="btn" @click="$router.push('/enroll')">参与项目</div>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>