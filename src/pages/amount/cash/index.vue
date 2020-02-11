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
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>