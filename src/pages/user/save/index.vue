<template>
  <div id="save">
    <div class="user">
      <div class="name-info">
        <div class="name">姓名*</div>
        <div class="hide">
          <van-switch v-model="checked" size="15px" active-color="#07c160" inactive-color="#ee0a24" />
          是否隐藏
        </div>
      </div>
      <input class="input" type="text" placeholder="请输入您的姓名">
    </div>
    <div class="user">
      <div class="name-info">
        <div class="name">出生日期*</div>
        <div class="hide">
          <van-switch v-model="checked" size="15px" active-color="#07c160" inactive-color="#ee0a24" />
          是否隐藏
        </div>
      </div>
      <input class="input" type="text" placeholder="选择日期">
    </div>
    <div class="user">
      <div class="name-info">
        <div class="name">专业技能*</div>
        <div class="hide">
          <van-switch v-model="checked" size="15px" active-color="#07c160" inactive-color="#ee0a24" />
          是否隐藏
        </div>
      </div>
      <input class="input" type="text" placeholder="请输入您的专业技能">
    </div>
    <div class="user">
      <div class="name-info">
        <div class="name">联系方式*</div>
        <div class="hide">
          <van-switch v-model="checked" size="15px" active-color="#07c160" inactive-color="#ee0a24" />
          是否隐藏
        </div>
      </div>
      <input class="input" type="text" placeholder="请输入您的联系方式">
    </div>
    <div class="user">
      <div class="name-info">
        <div class="name">性别*</div>
        <div class="hide">
          <van-switch v-model="checked" size="15px" active-color="#07c160" inactive-color="#ee0a24" />
          是否隐藏
        </div>
      </div>
      <div class="button-holder">
        <div class="sex">男</div>
        <div class="sex">女</div>
		  </div>
    </div>
    <div class="sub">保存</div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>