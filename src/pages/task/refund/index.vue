<template>
  <div id="refund">
    <div class="panel">
      <div class="title">请简单描述一下你的退款理由</div>
      <van-field
        v-model="form.reason"
        style="border: 1px solid rgba(187, 187, 187, 1); padding: 10px;"
        rows="4"
        autosize
        type="textarea"
        maxlength="300"
        placeholder="10~300个字符，请简单陈述一下您的退款理由，以方便更快的退款成功"
        show-word-limit
      />
    </div>
    <div class="btn" @click="submit()">退款</div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>