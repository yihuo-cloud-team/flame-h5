<template>
  <div id="recharge">
    <div class="member">
      <div class="member-title">会员套餐</div>
      <div class="m-box">
        <div class="m-box1">
          <div class="m-day">30天</div>
          <div class="m-num">50次</div>
          <div class="m-money">88元</div>
        </div>
        <div class="m-box2">
          <div class="m-day">30天</div>
          <div class="m-num">100次</div>
          <div class="m-money">176元</div>
        </div>
      </div>
    </div>
    <van-divider />
    <div class="buy">
      <div class="b-title">购买时长</div>
      <div class="b-box">
        <div class="b-box1">
          <div class="b-day">30天</div>
          <div class="b-money">88元</div>
        </div>
        <div class="b-box2">
          <div class="b-day">60天</div>
          <div class="b-money">176元</div>
        </div>
        <div class="b-box2">
          <div class="b-day">90天</div>
          <div class="b-money">264元</div>
        </div>
        <div class="b-box2">
          <div class="b-day">180天</div>
          <div class="b-money">582元</div>
        </div>
        <div class="b-box2">
          <div class="b-day">360天</div>
          <div class="b-money">1056元</div>
        </div>
      </div>
    </div>
    <div class="tick">
      <div class="t-title">购买次数</div>
      <div class="t-1">
        1.次数每日充值，有效期为一个月
      </div>
      <div class="t-1">
        2.每天最多购买200次
      </div>
    </div>
    <div class="footer">
      <div class="f-num">
        <div class="f-num-ci">5次 /</div>
        <div>2.5元</div>
      </div>
      <van-slider class="f-hua" v-model="value" active-color="#FFAD3D" bar-height="5px" @change="onChange"  />
    </div>
    <div class="btn">确认</div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>