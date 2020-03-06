<template>
  <div id="info">
    <div class="head">
      <div class="head-body">
        <div class="title-box">
          <div class="title">{{info.task_name}}</div>
          <div class="state">
            <template v-if="info.task_state==1">
              <van-tag plain type="success" size="medium">待支付</van-tag>
            </template>
            <template v-else>
              <template v-if="info.state==0">
                <van-tag plain type="success" size="medium">等待审核</van-tag>
              </template>
              <template v-if="info.state==1">
                <template v-if="info.is_up==0">
                  <van-tag plain type="success" size="medium">已下架</van-tag>
                </template>
                <template v-if="info.is_up==1">
                  <van-tag plain type="success" size="medium" v-if="info.task_state==0">招募中</van-tag>
                  <van-tag plain type="success" size="medium" v-if="info.task_state==2">进行中</van-tag>
                  <van-tag plain type="success" size="medium" v-if="info.task_state==3">中止</van-tag>
                  <van-tag plain type="success" size="medium" v-if="info.task_state==4">完成</van-tag>
                  <van-tag plain type="success" size="medium" v-if="info.task_state==5">待验收</van-tag>
                  <van-tag plain type="success" size="medium" v-if="info.task_state==6">失败</van-tag>
                </template>
              </template>
              <template v-if="info.state==2">
                <van-tag plain type="success" size="medium">审核失败</van-tag>
              </template>
            </template>
          </div>
        </div>
        <div class="num">
          <div class="left">NO.{{info.task_num}}</div>
          <div class="type" v-if="info.task_type==0">翻译</div>
          <div class="type" v-if="info.task_type==2">软件</div>
          <div class="type" v-if="info.task_type==3">设计</div>
          <div class="type" v-if="info.task_type==4">其他</div>
        </div>

        <div class="cost">周期 {{info.cycle}} 天 | 金额 ￥{{info.price}}</div>
        <div class="partake">
          <div class="number">报名人数：{{info.join_num}}</div>
          <div
            class="fabulous"
            @click="state = !state"
            :style="[{'color': state?'rgba(65, 135, 219, 1)':''}]"
          >
            <!-- <van-icon name="good-job-o" style="margin-right: 5px;" size="16px" />赞 999 -->
          </div>
        </div>
        <div v-if="info.state==2">
          <div style="color:red;font-size:14px;margin-top:10px">驳回原因:{{info.remarks}}</div>
        </div>
      </div>
    </div>
    <div class="body">
      <div class="title" style="margin-bottom: 6px;">任务信息</div>
      <div class="text">{{info.info}}</div>

      <div class="title" style="margin-bottom: 6px;">联系方式</div>
      <div class="contact">
        <div class="phone">{{info.name}}:{{info.contact}}</div>
      </div>
    </div>
    <div class="enlist-body">
      <div class="title">申请列表</div>
      <div class="enlist-list">
        <van-list v-model="loading" :finished="finished" style=" width: 100%;" @load="apply">
          <div class="item" v-for="(item,index) in list" :key="index" :title="item">
            <div class="head">
              <img class="img" :src="item.head_img" alt />
              <div class="info">
                <div class="name">{{item.name}}</div>
                <div class="time">{{item.add_time}}报名</div>
              </div>
              <div class="btn-box">
                <template v-if="info.is_up==1">
                  <template v-if="info.is_owner==1">
                    <template v-if="info.task_state==0">
                      <div class="btn" v-if="info.join_user==0" @click="select(item.user_id)">选他</div>
                    </template>
                  </template>
                </template>
                <template v-if="info.join_user!=0">
                  <div v-if="index==0">开发者</div>
                </template>
              </div>
            </div>
            <div class="text">{{item.text}}</div>
          </div>
        </van-list>
      </div>
    </div>
    <div class="fixed">
      <div class="help">
        <div class="help-btn">
          <van-icon size="18px" style="margin-right: 10px;" name="question-o" />帮助
        </div>
      </div>

      <!-- 等于1是自己发布的 -->
    </div>
    <div class="footer">
      <template v-if="info.is_owner==1">
        <!-- 审核状态 -->
        <template v-if="info.task_state==1">
          <van-button
         class="border-radius" color='#4289DB' size="large"
            @click.stop="$router.push(`/amount/deposit?task_order=${info.task_order}&&price=${info.price}`)"
          >待支付</van-button>
        </template>
        <template v-else>
          <!-- 支付完成进入待审核状态 -->
          <template v-if="info.state==0">
            <van-button class="border-radius" color='#4289DB' size="large" disabled>待审核</van-button>
          </template>
          <!-- 审核通过 -->
          <template v-if="info.state==1">
            <!--  任务状态为0 招募中 -->
            <template v-if="info.task_state==0">
              <template v-if="info.is_up==0">
                <van-button class="border-radius" color='#4289DB' size="large" @click="save1(info)">上架</van-button>
              </template>
              <template v-if="info.is_up==1">
                <van-button class="border-radius" color='#4289DB' size="large" @click="save2(info)">下架</van-button>
              </template>
            </template>
            <!--  任务状态为2 进行中-->
            <template v-if="info.task_state==2">
              <van-button  class="border-radius" color='#4289DB' size="large" disabled>任务进行中</van-button>
              <div class="box">
                <span class="left"></span>
                <span class="right" @click="quxiao(info)">终止任务</span>
              </div>
            </template>
            <!--  任务状态为3 任务中止-->
            <template v-if="info.task_state==3">
              <van-button class="border-radius" color='#4289DB' size="large" disabled>任务中止</van-button>
            </template>
            <template v-if="info.task_state==4">
              <van-button class="border-radius" color='#4289DB' size="large" disabled>任务完成</van-button>
            </template>
            <!-- 任务状态为5 完成待确认 -->
            <template v-if="info.task_state==5">
              <van-button class="border-radius" color='#4289DB' size="large" @click="confirm2(info)">确认完成</van-button>
            </template>
          </template>
          <!-- 审核被驳回 -->
          <template v-if="info.state==2">
            <van-button class="border-radius" color='#4289DB' size="large" @click="$router.push(`/task/edit?id=${info.id}`)">重新编辑</van-button>
          </template>
        </template>
      </template>

      <!-- 等于0是别人发布的 -->
      <template v-if="info.is_owner==0">
        <!-- 审核状态 -->
        <template v-if="info.state==1">
          <!-- 任务状态为0 -->
          <template v-if="info.task_state==0">
            <template v-if="info.is_up==0">
              <van-button class="border-radius" color='#4289DB' size="large" disabled>任务已下架</van-button>
            </template>
            <template v-if="info.is_up==1">
              <template v-if="info.is_join==0">
                <van-button class="border-radius" color='#4289DB' size="large" @click="$router.push(`/enroll?id=${info.id}`)">参与项目</van-button>
              </template>
              <template v-if="info.is_join==1">
                <van-button class="border-radius" color='#4289DB' size="large" disabled>已申请</van-button>
              </template>
            </template>
          </template>
          <template v-if="info.task_state==2  ">
            <template v-if="info.is_join==0">
              <van-button class="border-radius" color='#4289DB' size="large" disabled>您已错过此次任务</van-button>
            </template>
            <template v-if="info.is_join==1">
              <van-button class="border-radius" color='#4289DB' size="large" disabled>您的申请没有通过</van-button>
            </template>
            <template v-if="info.is_join==2">
              <van-button class="border-radius" color='#4289DB' size="large" @click="confirm1(info)">确认完成</van-button>
            </template>
          </template>
          <template v-if="info.task_state==3">
            <van-button class="border-radius" color='#4289DB' size="large" disabled>任务中止</van-button>
          </template>
          <template v-if="info.task_state==4">
            <van-button class="border-radius" color='#4289DB' size="large" disabled>任务已完成</van-button>
          </template>
          <template v-if="info.task_state==5">
            <van-button class="border-radius" color='#4289DB' size="large" disabled>已完成待验收</van-button>
          </template>
        </template>
      </template>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>