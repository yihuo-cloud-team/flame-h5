<template>
  <div id="info">
    <div class="head">
      <div class="head-body">
        <div class="title-box">
          <div class="title">{{info.task_name}}</div>
          <div class="state">
            <van-tag plain type="success" size="medium" v-if="info.task_state==0">招募中</van-tag>
            <van-tag plain type="success" size="medium" v-if="info.task_state==2">进行中</van-tag>
            <van-tag plain type="success" size="medium" v-if="info.task_state==3">中止</van-tag>
            <van-tag plain type="success" size="medium" v-if="info.task_state==4">完成</van-tag>
          </div>
        </div>
        <div class="type" v-if="info.task_type==0">翻译</div>
        <div class="type" v-if="info.task_type==2">软件</div>
        <div class="type" v-if="info.task_type==3">设计</div>
        <div class="type" v-if="info.task_type==4">其他</div>
        <div class="cost">周期 {{info.cycle}} 天 | 金额 ￥{{info.price}}</div>
        <div class="partake">
          <div class="number">报名人数：{{info.join_num}}</div>
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
      <div class="text">{{info.info}}</div>
      <div class="title" style="margin-bottom: 25px;">备注</div>
      <div class="text">{{info.remarks}}</div>
      <div class="title" style="margin-bottom: 6px;">联系方式</div>
      <div class="contact">
        <div class="phone">{{info.name}}:{{info.contact}}</div>
      </div>
    </div>
    <div class="enlist-body" v-if="info.is_owner==1">
      <div class="title">已报名</div>
      <div class="enlist-list">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          style=" width: 100%;"
          @load="onLoad"
        >
          <div class="item" v-for="item in info.joinData" :key="item" :title="item">
            <div class="head">
              <img
                class="img"
                src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4016333918,4269266815&fm=26&gp=0.jpg"
                alt
              />
              <div class="info">
                <div class="name">{{item.name}}</div>
                <div class="time">{{item.add_time}}报名</div>
              </div>
              <div class="btn-box">
                <div class="btn" v-if="info.join_user==0" @click="select(item.id)">选他</div>
              </div>
            </div>
            <div class="text">{{item.text}}</div>
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
      <van-button :disabled="false" v-if="info.state==0 && info.is_owner==1">发布</van-button>
      <van-button
        v-if="info.state==1 && info.is_owner==1 && info.is_up==0 &&info.task_state==0"
        @click="save1(info)"
      >发布</van-button>
      <van-button
        v-if="info.state==1 && info.is_owner==1 && info.is_up==1  && info.task_state==0"
        @click="save2(info)"
      >暂停</van-button>
      <van-button
        v-if="info.state==2 && info.is_owner==1"
        @click="$router.push(`/task/edit?id=${info.id}`)"
      >重新发布</van-button>
      <!-- <van-button v-if="info.state==2 && info.is_owner==1">编辑</van-button> -->
      <van-button
        @click="$router.push(`/enroll?id=${info.id}`)"
        v-if="info.state==1 && info.is_owner==0 && info.is_join==0"
      >参与项目</van-button>
      <van-button
        @click="$router.push(`/enroll?id=${info.id}`)"
        v-if="info.state==1 && info.is_owner==0 && info.is_join==1"
      >修改描述</van-button>
      <van-button
        v-if="info.state==1 && info.is_owner==1 && info.is_up==1 &&info.task_state==2"
        @click="quxiao(inid.id)"
      >中止</van-button>
      <van-button
        v-if="info.state==1 && info.is_owner==0 && info.is_up==1 &&info.task_state==2"
        @click="confirm1(info.id)"
      >完成待确认</van-button>
      <van-button
        v-if="info.state==1 && info.is_owner==1 && info.is_up==1 &&info.task_state==5"
        @click="confirm2(info.id)"
      >确认完成</van-button>
      <van-button
        v-if="info.state==1  && info.is_up==1 &&info.task_state==4"
        :disabled="false"
      >任务已完成</van-button>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>