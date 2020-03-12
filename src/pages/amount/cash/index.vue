<template>
  <div id="cash">
    <div class="panel">
      <div class="panel-money">
        <div class="left">
          <div class="money-text">余额（元）</div>
          <div class="money-num">{{info.user_money}}</div>
        </div>
        <div class="right">
          <div @click="$router.push('/amount/record')" class="text">收支记录</div>
        </div>
      </div>
      <div class="panel-cash">
        <div class="cash">
          <div class="cash-text">可提现金额（元）</div>
          <div class="cash-num">{{info.user_money}}</div>
        </div>
        <div class="frozen">
          <div class="frozen-text">冻结资金（元）</div>
          <div class="frozen-num">{{info.freeze_money}}</div>
        </div>
      </div>
    </div>
    <div class="tixian">
      <div class="title">提现账户类型</div>
      <van-radio-group class="checkb" v-model="query.money_type">
        <van-radio name="1">
          <div slot="icon" slot-scope="props" :class="['box',{'active':props.checked}]">微信</div>
        </van-radio>
        <van-radio name="2">
          <div slot="icon" slot-scope="props" :class="['box',{'active':props.checked}]">支付宝</div>
        </van-radio>
        <van-radio name="3">
          <div slot="icon" slot-scope="props" :class="['box',{'active':props.checked}]">银行卡</div>
        </van-radio>
      </van-radio-group>
      <div class="title">卡号</div>
      <van-cell-group>
        <van-field v-model="query.account" placeholder="微信号、支付宝账号、银行卡账号" />
      </van-cell-group>
      <div class="title">真实姓名</div>
      <van-cell-group>
        <van-field v-model="query.real_name" placeholder="请填写真实姓名，以免打款失败" />
      </van-cell-group>
      <div class="title">提现金额</div>
      <van-cell-group>
        <van-field v-model="query.money" type="number" placeholder="可提现金额" />
      </van-cell-group>
      <div class="baocun" @click="submit">发起提现</div>
     
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>