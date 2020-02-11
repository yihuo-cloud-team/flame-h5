<template>
  <div id="enroll">
    <div class="panel">
      <div class="title">简述你能胜任项目的原因（详细的说明能增加你的入选率）</div>
      <van-field
        v-model="message"
        style="border: 1px solid rgba(187, 187, 187, 1); padding: 10px;"
        rows="4"
        autosize
        type="textarea"
        maxlength="300"
        placeholder="10~300个字符，描述可以包含您对项目的理解、过往的相关经验、采用的技术方案等。详细的描述能增加您选中参与项目的机率。"
        show-word-limit
      />
    </div>
    <div class="btn" @click="submit()">提交</div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>