<template>
  <div id="save">
    <div class="user">
      <div class="name-info">
        <div class="name">姓名*</div>
        <div class="hide">
          <van-switch
            v-model="checked"
            size="15px"
            style="margin-right: 5px;"
            active-color="#07c160"
            inactive-color="#ee0a24"
          />
          <span class="hide-text">是否隐藏</span>
        </div>
      </div>
      <div class="input">
        <van-field style="padding: 3px 10px;" v-model="name" placeholder="请输入您的姓名" />
      </div>
    </div>
    <div class="user">
      <div class="name-info">
        <div class="name">出生日期*</div>
        <div class="hide">
          <van-switch
            v-model="checked"
            size="15px"
            style="margin-right: 5px;"
            active-color="#07c160"
            inactive-color="#ee0a24"
          />
          <span class="hide-text">是否隐藏</span>
        </div>
      </div>
      <div
        class="input"
        style="padding: 6px 10px 5px 10px; background-color: #fff;"
        @click="show = true"
      >{{tiemtext}}</div>
    </div>
    <div class="user">
      <div class="name-info">
        <div class="name">专业技能*</div>
        <div class="hide">
          <van-switch
            v-model="checked"
            size="15px"
            style="margin-right: 5px;"
            active-color="#07c160"
            inactive-color="#ee0a24"
          />
          <span class="hide-text">是否隐藏</span>
        </div>
      </div>
      <div class="input">
        <van-field style="padding: 3px 10px;" v-model="skill" placeholder="请输入您的专业技能" />
      </div>
    </div>
    <div class="user">
      <div class="name-info">
        <div class="name">联系方式*</div>
        <div class="hide">
          <van-switch
            v-model="checked"
            size="15px"
            style="margin-right: 5px;"
            active-color="#07c160"
            inactive-color="#ee0a24"
          />
          <span class="hide-text">是否隐藏</span>
        </div>
      </div>
      <div class="input">
        <van-field style="padding: 3px 10px;" v-model="phone" placeholder="请输入您的联系方式" />
      </div>
    </div>
    <div class="user">
      <div class="name-info">
        <div class="name">性别*</div>
        <div class="hide">
          <van-switch
            v-model="checked"
            size="15px"
            style="margin-right: 5px;"
            active-color="#07c160"
            inactive-color="#ee0a24"
          />
          <span class="hide-text">是否隐藏</span>
        </div>
      </div>
      <div class="button-holder">
        <div :class="['sex',{'activ': sex == 1}]" @click="sex = 1">男</div>
        <div :class="['sex',{'activ': sex == 2}]" @click="sex = 2">女</div>
      </div>
    </div>
    <div class="sub">保存</div>
    <van-popup v-model="show" position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        :min-date="minDate"
        :max-date="maxDate"
        :formatter="formatter"
        @cancel="show = !show"
        @confirm="getTiem"
      />
    </van-popup>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>