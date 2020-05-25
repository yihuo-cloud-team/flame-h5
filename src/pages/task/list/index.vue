<template>
<div id="list">
    <div class="trends-box">
        <div class="trends-list erect">
            <van-list v-model="loading" :finished="finished" style=" width: 100%;" @load="update">
                <task-card :info='item' class="item" v-for="(item,index) in list" :key="index" :title="item"></task-card>
            </van-list>
        </div>
        <div class="btn" @click="$router.push('/search')" v-if="finished">首页搜索更多内容</div>
    </div>
</div>
</template>

<script src="./index.js"></script>

<style lang="scss" scoped>
@import "index.scss";
</style>
