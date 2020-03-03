<template>
  <div id="mention">
    <van-field
      v-model="message"
      rows="3"
      autosize
      type="textarea"
      style="margin-bottom: 15px;"
      maxlength="300"
      placeholder="为了提高 益火TKI 产品服务质量，如果您在使用 益火TKI 相关产品服务得不到满意解答或是有好的建议，欢迎您提交给我们，我们将严肃的对待每个客户的投诉或是建议！"
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