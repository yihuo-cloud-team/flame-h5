<template>
  <div id="cash">
    <div class="panel">
      <div class="panel-money">
        <div class="money-text">余额（元）</div>
        <div class="money-num">9999.99</div>
      </div>
      <div class="panel-cash">
        <div class="cash">
          <div class="cash-text">可提现金额（元）</div>
          <div class="cash-num">9999.99</div>
        </div>
        <div class="frozen">
          <div class="frozen-text">冻结资金（元）</div>
          <div class="frozen-num">20.50</div>
        </div>
      </div>
    </div>
    <div class="account">
      <div class="account-type">提现账户类型</div>
      <div class="account-box">
        <div class="box1">微信</div>
        <div class="box1">支付宝</div>
        <div class="box1">银行卡</div>
      </div>
    </div>
    <div class="card">
      <div style="margin-bottom: 20px;">卡号</div>
      <div class="card-input">
        <van-field v-model="number" style="padding: 5px 10px;" placeholder="微信号、支付宝账户、银行卡账户" />
      </div>
    </div>
    <div class="card">
      <div style="margin-bottom: 20px;">真实姓名</div>
      <div class="card-input">
        <van-field v-model="name" style="padding: 5px 10px;" placeholder="请填写真实姓名，以免打错款" />
      </div>
    </div>
    <div class="card">
      <div style="margin-bottom: 20px;">提现金额</div>
      <div class="card-input">
        <van-field v-model="quota" style="padding: 5px 10px;" placeholder="可提现金额9999.99" />
      </div>
    </div>
    <div class="btn">提交</div>
    <div class="bottom-text" @click="$router.push('/amount/record')">提现记录</div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>