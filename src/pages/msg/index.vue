<template>
  <div id="msg">
    <div class="msg-list-panel">
      <div class="msg-card" v-for="item in msgList" :key="item.id">
        <div class="msg-card-body right" v-if="item.send_id==user_id">
          <div class="message-box">
            <div class="user-title">{{item.sendUserInfo.name}}</div>
            <div class="content-box">{{item.content}}</div>
          </div>
          <div class="user-info-box">
            <div class="user-head">
              <van-image round width="50" height="50" :src="$getUrl(item.sendUserInfo.head_img)" />
            </div>
          </div>
        </div>
        <div class="msg-card-body left" v-if="item.send_id!=user_id">
          <div class="user-info-box">
            <div class="user-head">
              <van-image round width="50" height="50" :src="$getUrl(item.sendUserInfo.head_img)" />
            </div>
          </div>
          <div class="message-box">
            <div class="user-title">{{item.sendUserInfo.name}}</div>
            <div class="content-box">{{item.content}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="tool-panel">
      <div class="input-box">
        <input type="text" v-model="msg" />
      </div>
      <div class="btn-box">
        <van-button size="small" round @click="sendText">发送</van-button>
      </div>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>
