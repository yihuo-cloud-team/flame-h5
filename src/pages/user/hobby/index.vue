<template>
  <div id="hobby">
    <div class="head">
      <div class="title">我的相册</div>
      <van-row gutter="10">
        <van-col span="8" v-for="(item,index) in userInfo.img_list" :key="index">
          <div class="img-box" :style="{'backgroundImage':`url(${$getUrl(item)})`}">
            <!-- <van-image width="100" height="100" fit="cover" :src="" /> -->
            <div class="delete" @click="delImg(index)">
              <van-icon name="delete" size="18" />
            </div>
          </div>
        </van-col>
      </van-row>
      <ol-upload class="portrait" v-model="photo"></ol-upload>
    </div>
    <div class="star" @click="starShow = true">
      <div class="title">我的星座</div>
      <div v-if="!userInfo.constellation" class="no-star">未选择星座,请选择</div>
      <van-tag v-else class="user-star" size="large" color="#DE93F3">{{userInfo.constellation}}</van-tag>
    </div>
    <van-popup v-model="starShow" position="bottom">
      <van-picker show-toolbar :columns="starArr" @confirm="onStar" @cancel="starShow = false" />
    </van-popup>
    <div class="hobby-body">
      <div class="title">我的爱好</div>
      <div class="tab-box">
        <van-tag
          v-for="(item,index) in userInfo.like_list"
          :key="index"
          closeable
          size="medium"
          :color="item.color"
          class="tab"
          type="primary"
          @close="close(index)"
        >{{item.text}}</van-tag>
        <van-tag color="#666" style="margin-bottom: 10px;" plain @click="show = true">
          <van-icon name="plus" size="16" />
        </van-tag>
        <van-popup v-model="show" position="bottom">
          <van-field v-model="hobby" placeholder="请输入您的爱好" />
          <van-button type="primary" @click="addHobby" block>确认添加</van-button>
        </van-popup>
      </div>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>