<template>
  <div id="add">
    <div class="card">
      <div class="img">
        <ol-upload style="width:100%" v-model="form.img">
          <van-image
            width="100%"
            height="200px"
            fit="cover"
            :src="$getUrl(form.img)"
            alt="点击配置任务图片"
          >
            <div slot="error">点击配置任务图片</div>
          </van-image>
        </ol-upload>
        <div class="default-text" @click.stop="change">
          <span>使用默认图片</span>
        </div>
      </div>
      <div class="form-box">
        <input
          class="title-input"
          v-model="form.task_name"
          maxlength="30"
          type="text"
          placeholder="任务名称（30字以内）"
        />
      </div>
    </div>

    <div class="task-type">
      <van-divider>请选择任务类别</van-divider>
      <div class="option">
        <div
          v-for="(item,i) in classList"
          :key="i"
          :class="['item',{'activ': form.task_type == item.id}]"
          @click="form.task_type= item.id"
        >
          <span>
            <img class="icon" :src="$getUrl(item.icon)" />
            {{item.name}}
          </span>
        </div>
      </div>
    </div>

    <div class="price">
      <van-divider>请配置任务价格</van-divider>
      <div class="price-box" v-if="priceList">
        <div class="price-card" @click="price(todo)" v-for="(todo,i) in priceList" :key="i">
          <div>{{todo|money}}¥</div>
        </div>
      </div>
      <input
        class="price-input"
        placeholder="请输入任务价格"
        maxlength="30"
        v-model.number="form.price"
        type="number"
      />
    </div>

    <van-divider>请配置任务周期（天）</van-divider>
    <input
      class="price-input"
      placeholder="请输入任务周期"
      maxlength="30"
      v-model.number="form.cycle"
      type="number"
    />
    <van-divider>请详细描述您的任务信息</van-divider>
    <textarea
      class="price-input"
      placeholder="请尽量详细描述您的项目，以吸引更多人报名"
      maxlength="300"
      v-model.number="form.info"
      cols="30"
      rows="10"
    ></textarea>

    <div class="region">
      <van-divider>所在地</van-divider>
      <div class="input" v-if="form.p==''" @click="show = !show">省市区选择</div>
      <div
        class="input"
        v-if="form.p!=''"
        @click="show = !show"
      >{{form.p | areaToStr}}{{form.c | areaToStr}}{{form.a | areaToStr}}</div>
    </div>

    <van-divider>详细地址</van-divider>
    <input class="price-input" v-model="form.address" placeholder="详细地址" maxlength="10" />

    <van-divider>联系方式</van-divider>
    <input class="price-input" v-model="form.contact" placeholder="手机、微信、QQ等" maxlength="30" />

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