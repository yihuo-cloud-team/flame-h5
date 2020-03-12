<template>
  <div id="add">
    <div class="name">
      <div class="title">任务名称</div>
      <div class="input">
        <van-field maxlength="30" v-model="form.task_name" placeholder="30字符以内" />
      </div>
    </div>

    <div class="tupian">
      <div class="title">任务图片</div>
      <div class="store-image">
        <ol-upload style="border-radius:100%;" v-model="form.img">
          <img :class="form.img==''?'img':'img1'" :src="$getUrl(form.img)" />
        </ol-upload>
        <van-tag class="tag" @click="change" color="rgba(66, 137, 220, 1)" plain>默认图片</van-tag>
      </div>
    </div>
    <div class="task-type">
      <div class="title">任务类别</div>
      <div class="option">
        <div :class="['item',{'activ': form.task_type == 1}]" @click="form.task_type=1">翻译</div>
        <div :class="['item',{'activ': form.task_type == 2}]" @click="form.task_type=2">软件</div>
        <div :class="['item',{'activ': form.task_type == 3}]" @click="form.task_type=3">设计</div>
        <div :class="['item',{'activ': form.task_type == 4}]" @click="form.task_type=4">其他</div>
      </div>
    </div>
    <div class="price">
      <div class="title">任务价格</div>
      <div class="input">
        <van-field maxlength="30" type="number" v-model.number="form.price" placeholder="请输入数字" />
      </div>
    </div>
    <div class="address">
      <div class="title">任务周期(天)</div>
      <div class="input">
        <van-field maxlength="30" type="number" v-model.number="form.cycle" placeholder="请输入数字" />
      </div>
    </div>
    <div class="info">
      <div class="title">任务信息</div>
      <div class="input">
        <van-field
          style="padding: 10px;"
          rows="4"
          autosize
          v-model="form.info"
          maxlength="300"
          type="textarea"
          placeholder="请尽量详细描述您的项目，以吸引更多人报名"
          show-word-limit
        />
      </div>
    </div>
    <div class="region">
      <div class="title">所在地</div>
      <div class="input" v-if="form.p==''" @click="show = !show">省市区选择</div>
      <div
        class="input"
        v-if="form.p!=''"
        @click="show = !show"
      >{{form.p | areaToStr}}{{form.c | areaToStr}}{{form.a | areaToStr}}</div>
    </div>
    <div class="address">
      <div class="title">详细地址</div>
      <div class="input">
        <van-field maxlength="10" v-model="form.address" placeholder="10字符以内" />
      </div>
    </div>
    <div class="address">
      <div class="title">
        联系方式
        <span style="font-size:14px">(手机/微信/QQ等)</span>
      </div>
      <div class="input">
        <van-field v-model="form.contact" placeholder="手机、微信、QQ等" />
      </div>
    </div>

    <div class="btn" @click="submit">下一步：托管资金</div>
    <van-popup v-model="show" position="bottom">
      <van-area :area-list="areaList" value="110101" @cancel="show = !show" @confirm="select" />
    </van-popup>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>