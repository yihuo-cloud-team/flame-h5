<template>
  <div id="record">
    <div class="order" v-for="(item,index) in list" :key="index">
      <div class="order-left">
        <div class="title">{{item.title}}</div>
        <div class="text">订单号: {{item.order}}</div>
        <div class="text" v-if="item.state == 1">充值方式：{{item.type}}</div>
        <div class="text" v-if="item.state == 2">收款方式：{{item.type}}</div>
        <div class="type">备注：{{item.text}}</div>
      </div>
      <div class="order-right">{{item.money}} 元</div>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>