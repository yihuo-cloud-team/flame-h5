<template>
  <div id="list">
    <div class="list">
      <div class="item" v-for="(item,index) in 10" :key="index" >
        <div class="top">
          <img
            src="https://server.followenjoy.cn/Public/Upload/admin/2020-02-17/dz9d1ddz4zz6e6o.jpg"
            alt
          />
        </div>
        <div class="bottom">
          <div class="item-title">隔离疫情不隔离爱！</div>
          <div class="item-time">2019-12-07</div>
          <div class="item-info">PITTA MASK 口罩仅需39.9元！菌菇水低至165元！欧莱雅紫熨斗仅185元！迪奥999低至185元！抢！</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>