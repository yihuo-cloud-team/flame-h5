<template>
  <div id="appeal">
    <van-field
      v-model="message"
      rows="3"
      autosize
      type="textarea"
      style="margin-bottom: 15px;"
      maxlength="300"
      placeholder="请填写申诉原因"
      show-word-limit
    />
    <div class="btn" @click="submit">
      提交
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>