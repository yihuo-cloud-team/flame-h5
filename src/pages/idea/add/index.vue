<template>
  <div id="add">
    <textarea class="input-text" name id cols="30" rows="10" v-model="form.contact"></textarea>
    <div class="class">
      <van-field
        readonly
        clickable
        label="分类"
        :value="value"
        placeholder="选择分类"
        @click="showPicker = true"
      />
      <van-popup v-model="showPicker" position="bottom">
        <van-picker
          show-toolbar
          :columns="columns"
          @cancel="showPicker = false"
          @confirm="onConfirm"
        />
      </van-popup>
    </div>
    <div class="anonymous">
      <div class="title">是否匿名</div>
      <div>
        <van-switch active-color="#55C7C7" v-model="form.is_no_name" :active-value="1" :inactive-value="0" size="24px" />
      </div>
    </div>
    <div class="btn-sub" @click="submit" block>发布</div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>