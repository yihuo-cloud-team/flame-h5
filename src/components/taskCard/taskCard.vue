<template>
<div id="card">
    <div class="panel">
        <div class="box-img">
            <div class="img" :style="`background-image: url(${$getUrl(info.img)});`"></div>
        </div>
        <div class="panel-body">
            <div class="title-box">
                <div class="title">{{info.task_name}}</div>
                <div class="state">
                    <van-tag plain type="success" size="medium" v-if="info.task_state==1">待支付</van-tag>
                    <van-tag plain type="success" size="medium" v-if="info.task_state==2">招募中</van-tag>
                    <van-tag plain type="success" size="medium" v-if="info.task_state==3">进行中</van-tag>
                    <van-tag plain type="success" size="medium" v-if="info.task_state==4">完成</van-tag>
                    <van-tag plain type="success" size="medium" v-if="info.task_state==5">申诉</van-tag>
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
