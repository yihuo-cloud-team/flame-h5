<template>
  <div id="msg">
    <div class="msg-list-panel" ref="msg-box">
      <div class="text-center" style="padding:10px">
        <van-loading size="24px" v-if="loadingOld">加载中...</van-loading>
      </div>
      <div class="msg-card" v-for="item in list" :key="item.id">
        <div class="msg-card-body right" v-if="item.user_id==user_id">
          <div class="message-box">
            <div class="user-title">{{item.userInfo.name}}</div>
            <div class="content-box" v-if="item.msg_type==1">{{item.msg}}</div>
          </div>
          <div class="user-info-box">
            <div class="user-head">
              <van-image round width="50" height="50" :src="$getUrl(item.userInfo.head_img)" />
            </div>
          </div>
        </div>
        <div class="msg-card-body left" v-if="item.user_id!=user_id">
          <div class="user-info-box">
            <div class="user-head">
              <van-image round width="50" height="50" :src="$getUrl(item.userInfo.head_img)" />
            </div>
          </div>
          <div class="message-box">
            <div class="user-title">{{item.userInfo.name}}</div>
            <div class="content-box" v-if="item.msg_type==1">{{item.msg}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="tool-panel">
      <div class="input-box">
        <input type="text" v-model="msg" />
      </div>
      <div class="btn-box">
        <van-button size="normal" round @click="sendText">发送</van-button>
      </div>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>
