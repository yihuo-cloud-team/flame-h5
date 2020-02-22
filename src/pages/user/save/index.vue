<template>
  <div id="save">
    <div class="user">
      <div class="name-info">
        <div class="name">姓名*</div>
        <div class="hide">
          <van-switch
            v-model="form.name_show"
            size="15px"
            style="margin-right: 5px;"
            active-color="#07c160"
            inactive-color="#ee0a24"
            :active-value="1"
            :inactive-value="0"
          />
          <span class="hide-text">是否显示</span>
        </div>
      </div>
      <div class="input">
        <van-field style="padding: 3px 10px;" v-model="form.name" placeholder="请输入您的姓名" />
      </div>
    </div>
    <div class="user">
      <div class="name-info">
        <div class="name">出生日期*</div>
        <div class="hide">
          <van-switch
            v-model="form.birthday_show"
            size="15px"
            style="margin-right: 5px;"
            active-color="#07c160"
            inactive-color="#ee0a24"
            :active-value="1"
            :inactive-value="0"
          />
          <span class="hide-text">是否显示</span>
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
            v-model="form.skill_show"
            size="15px"
            style="margin-right: 5px;"
            active-color="#07c160"
            inactive-color="#ee0a24"
            :active-value="1"
            :inactive-value="0"
          />
          <span class="hide-text">是否显示</span>
        </div>
      </div>
      <div class="input">
        <van-field style="padding: 3px 10px;" v-model="form.skill" placeholder="请输入您的专业技能" />
      </div>
    </div>
    <div class="user">
      <div class="name-info">
        <div class="name">联系方式*</div>
        <div class="hide">
          <van-switch
            v-model="form.phone_show"
            size="15px"
            style="margin-right: 5px;"
            active-color="#07c160"
            inactive-color="#ee0a24"
            :active-value="1"
            :inactive-value="0"
          />
          <span class="hide-text">是否显示</span>
        </div>
      </div>
      <div class="input">
        <van-field style="padding: 3px 10px;" v-model="form.phone" placeholder="请输入您的联系方式" />
      </div>
    </div>
    <div class="user">
      <div class="name-info">
        <div class="name">性别*</div>
        <div class="hide">
          <van-switch
            v-model="form.gender_show"
            size="15px"
            style="margin-right: 5px;"
            active-color="#07c160"
            inactive-color="#ee0a24"
            :active-value="1"
            :inactive-value="0"
          />
          <span class="hide-text">是否显示</span>
        </div>
      </div>
      <div class="button-holder">
        <div :class="['sex',{'activ': form.gender == 1}]" @click="form.gender = 1">男</div>
        <div :class="['sex',{'activ': form.gender == 0}]" @click="form.gender = 0">女</div>
      </div>
    </div>
    <div class="sub" @click="submit">保存</div>
    <van-popup v-model="show" position="bottom">
      <van-datetime-picker

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