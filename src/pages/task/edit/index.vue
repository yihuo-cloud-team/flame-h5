<template>
  <div id="edit">
    <div class="name">
      <div class="title">任务名称</div>
      <div class="input">
        <van-field v-model="taskname" placeholder="30字符以内" />
      </div>
    </div>
    <div class="task-type">
      <div class="title">任务类别</div>
      <div class="option">
        <div :class="['item',{'activ': activ == 1}]" @click="activ=1">翻译</div>
        <div :class="['item',{'activ': activ == 2}]" @click="activ=2">软件</div>
        <div :class="['item',{'activ': activ == 3}]" @click="activ=3">设计</div>
        <div :class="['item',{'activ': activ == 4}]" @click="activ=4">其他</div>
      </div>
      <transition name="fade">
        <div class="input" v-if="activ == 4">
          <van-field v-model="tasktype" placeholder="10字符以内" />
        </div>
      </transition>
    </div>
    <div class="price">
      <div class="title">任务价格</div>
      <div class="input">
        <van-field v-model="taskprice" placeholder="30字符以内" />
      </div>
    </div>
    <div class="info">
      <div class="title">任务信息</div>
      <div class="input">
        <van-field
          style="padding: 10px;"
          v-model="info"
          rows="4"
          autosize
          type="textarea"
          maxlength="300"
          placeholder="请尽量详细描述您的项目，以吸引更多人报名"
          show-word-limit
        />
      </div>
    </div>
    <div class="region">
      <div class="title">所在地</div>
      <div class="input" @click="show = !show">{{area}}</div>
    </div>
    <div class="address">
      <div class="title">详细地址</div>
      <div class="input">
        <van-field v-model="address" placeholder="10字符以内" />
      </div>
    </div>
    <div class="btn" @click="submit">下一步：托管资金</div>
    <van-popup v-model="show" position="bottom">
      <van-area
        :area-list="areaList"
        :value="selecarea.length > 1?selecarea[2].code:'110101'"
        @cancel="show = !show"
        @confirm="selec"
      />
    </van-popup>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>