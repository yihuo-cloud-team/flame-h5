<template>
  <div id="user">
    <div class="user-info">
      <div class="info-image">
        <img class="img" :src="userInfo.head_img" />
      </div>
      <div class="user-name">{{userInfo.name}}</div>
    </div>

    <div>
      <van-cell-group>
        <van-cell title="用户信息" to="/user/save" is-link />
        <!-- <van-cell title="会员充值中心" to="/amount/recharge" is-link /> -->
        <!-- <van-cell title="我的订单" to="/order/record" is-link /> -->
        <van-cell title="发布任务" to="/task/add" is-link />
        <van-cell title="我的发布" to="/task/release" is-link />
        <van-cell title="我申请的任务" to="/task/apply" is-link  />
        <van-cell title="我接到的任务" to="/task/join" is-link />
        <van-cell title="平台行业排行榜" is-link to="/user/ranking" />
        <van-cell title="我的提现" to="/amount/cash" is-link />
        <van-cell title="活动" is-link />
        <van-cell title="投诉与建议" to="/user/mention" is-link />
        <van-cell title="帮助说明" to="/user/help" is-link />
      </van-cell-group>
    </div>
    <!-- <div class="btn" @click="signOut">退出登录</div> -->
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>