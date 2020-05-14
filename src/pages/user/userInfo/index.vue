<template>
  <div id="userInfo">
    <van-swipe @change="onChange" v-if="userInfo.img_list">
      <van-swipe-item @click="preview" v-for="item in userInfo.img_list" :key="item">
        <van-image fit="cover" class="img" :src="$getUrl(item)" />
      </van-swipe-item>
      <template #indicator>
        <div class="custom-indicator">{{ current + 1 }}/{{userInfo.img_list.length}}</div>
      </template>
    </van-swipe>
    <div class="info">
      <div class="head-portrait">
        <!-- <ol-upload v-if="!userInfo.img" class="portrait" v-model="userInfo.img"></ol-upload> -->
        <van-image width="60" round fit="cover" height="60" :src="$getUrl(userInfo.head_img)" />
      </div>
      <div class="text">
        <div class="name">{{userInfo.name}}</div>
        <van-tag v-if="userInfo.constellation" color="#DE93F3">{{userInfo.constellation}}</van-tag>
      </div>
      <div class="edit">
        <div
          class="edit-body"
          v-if="userInfo_id == userInfo.id"
          @click="$router.push('/user/hobby/')"
        >
          编辑资料
          <van-icon name="arrow" />
        </div>
      </div>
    </div>
    <div class="tag-box">
      <van-tag
        v-for="(item,index) in userInfo.like_list"
        :key="index"
        class="icon"
        :color="item.color"
      >{{item.text}}</van-tag>
    </div>
    <div class="user-info">
      <div class="title">
        基本信息
        <div
          class="edit-body"
          v-if="userInfo_id == userInfo.id"
          @click="$router.push('/user/save')"
        >
          编辑资料
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="body">
        <div class="gender">性别：{{userInfo.gender == 1 ? '男生' : '女士'}}</div>
        <div class="phone">联系方式：{{userInfo.phone}}</div>
        <div class="birthday">出生日期：{{userInfo.birthday}}</div>
        <div class="skill">专业技能：{{userInfo.skill}}</div>
      </div>
    </div>
    <div class="fb">
      <van-button block color="#4289db" @click="message" v-if="userInfo_id != userInfo.id">发消息</van-button>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>