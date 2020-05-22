<template>
<div id="join">
    <div class="trends-box">
        <div class="trends-list erect">
            <van-list v-model="loading" :finished="finished" style=" width: 100%;" @load="update">
                <task-card :info='item' class="item" @click="$router.push(`/task/info?task_id=${item.id}`)" v-for="(item,index) in list" :key="index" :title="item"></task-card>
            </van-list>
        </div>
        <van-divider v-if="finished">没有更多了</van-divider>
    </div>
</div>
</template>

<script src="./index.js"></script>

<style lang="scss" scoped>
@import "index.scss";
</style>
