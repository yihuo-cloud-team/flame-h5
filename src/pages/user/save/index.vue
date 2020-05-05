<template>
  <div id="save">
    <div class="head">
      <ol-upload class="portrait" v-model="form.head_img">
        <van-image width="80" class="img" fit="cover" height="80" :src="$getUrl(form.head_img)" />
      </ol-upload>
    </div>
    <div class="user-info">
      <div class="title">基本信息</div>
      <van-cell-group>
        <van-field v-model="form.name" label="昵称" placeholder="请输入您的昵称" />
        <van-field name="switch" label="昵称展示">
          <template #input>
            <van-switch v-model="form.name_show" :active-value="1" :inactive-value="0" size="20" />
            <span class="switch-text">{{form.name_show?'展示':'隐藏'}}</span>
          </template>
        </van-field>
        <van-field v-model="form.phone" label="联系方式" placeholder="请输入联系方式" />
        <van-field name="switch" label="联系方式展示">
          <template #input>
            <van-switch v-model="form.phone_show" :active-value="1" :inactive-value="0" size="20" />
            <span class="switch-text">{{form.phone_show?'展示':'隐藏'}}</span>
          </template>
        </van-field>
        <van-field
          readonly
          clickable
          name="datetimePicker"
          :value="tiemtext"
          label="生日"
          placeholder="请选择您的生日"
          @click="showPicker = true"
        />
        <van-field name="switch" label="生日展示">
          <template #input>
            <van-switch
              v-model="form.birthday_show"
              :active-value="1"
              :inactive-value="0"
              size="20"
            />
            <span class="switch-text">{{form.birthday_show?'展示':'隐藏'}}</span>
          </template>
        </van-field>
        <van-popup v-model="showPicker" position="bottom">
          <van-datetime-picker
            :formatter="formatter"
            :min-date="minDate"
            :max-date="maxDate"
            type="datetime"
            @confirm="getTiem"
            @cancel="showPicker = false"
          />
        </van-popup>
        <van-field name="checkboxGroup" label="性别">
          <template #input>
            <van-radio-group v-model="form.gender" direction="horizontal">
              <van-radio :name="1">男生</van-radio>
              <van-radio :name="2">女生</van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <van-field name="switch" label="性别展示">
          <template #input>
            <van-switch v-model="form.gender_show" :active-value="1" :inactive-value="0" size="20" />
            <span class="switch-text">{{form.gender_show?'展示':'隐藏'}}</span>
          </template>
        </van-field>
        <van-field v-model="form.skill" label="专业技能" placeholder="请输入专业技能" />
        <van-field name="switch" label="技能展示">
          <template #input>
            <van-switch v-model="form.skill_show" :active-value="1" :inactive-value="0" size="20" />
            <span class="switch-text">{{form.skill_show?'展示':'隐藏'}}</span>
          </template>
        </van-field>
      </van-cell-group>
    </div>
    <div class="footbtn">
      <van-button color="#4289DB" @click="submit" block>保存</van-button>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>