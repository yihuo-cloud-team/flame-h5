<template>
  <div class="task-card">
    <div class="panel">
      <div class="box-img">
        <van-image width="130" radius="5" height="100" :src="$getUrl(info.img)" />
      </div>
      <div class="panel-body">
        <div class="title-box">
          <div class="title">{{info.task_name}}</div>
          <div class="state">
            <template v-if="info.state==1">
              <template v-if="info.is_up==0">
                <van-tag plain type="success" size="medium">已下架</van-tag>
              </template>
              <template v-if="info.is_up==1">
                <van-tag
                  v-for="(todo,i) in task_stateList"
                  :key="i"
                  plain
                  type="success"
                  size="medium"
                  v-show="todo.task_state==info.task_state"
                >{{todo.title}}</van-tag>
              </template>
            </template>
          </div>
        </div>
        <div class="text">
          <div class="money">￥{{info.price}}</div>
        </div>
        <div class="subtitle">{{$handleTime(info.add_time)}} | {{info.join_num}}人报名</div>
      </div>
    </div>
    <div class="panel-bottom" v-if="isMe">
      <van-icon name="ellipsis" @click="show=true" size="1.5rem" color="#666" />
    </div>
    <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
  </div>
</template>

<script src="./taskCard.js"></script>

<style lang="scss" scoped>
@import "taskCard.scss";
</style>
