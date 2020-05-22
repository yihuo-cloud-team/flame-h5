<template>
<div id="info">
    <div class="head">
        <div class="head-body">
            <div class="title-box">
                <div class="title">{{info.task_name}}</div>
                <div class="state">
                    <template v-if="info.task_state==1">
                        <van-tag plain type="success" size="medium">待支付</van-tag>
                    </template>
                    <template v-else>
                        <template v-if="info.is_up==0">
                            <van-tag plain type="success" size="medium">已下架</van-tag>
                        </template>
                        <template v-if="info.is_up==1">
                            <van-tag plain type="success" size="medium" v-for="(item,i) in task_stateList" :key="i" v-show='info.task_state==item.task_state'>{{item.title}}</van-tag>
                        </template>
                    </template>
                </div>
            </div>
            <div class="num">
                <div class="left">NO.{{info.task_num}}</div>
                <div class="type">{{info.class_name}}</div>
            </div>

            <div class="cost">周期 {{info.cycle}} 天 | 金额 ￥{{info.price}}</div>
            <div class="partake">
                <div class="number">报名人数：{{info.join_num}}</div>
                <div class="fabulous" @click="state = !state" :style="[{'color': state?'rgba(65, 135, 219, 1)':''}]">
                    <!-- <van-icon name="good-job-o" style="margin-right: 5px;" size="16px" />赞 999 -->
                </div>
            </div>
        </div>
    </div>
    <div class="body" style="margin-bottom:10px;">
        <div class="title" style="margin-bottom: 15px;">发布者信息</div>
        <div class="user-contact">
            <van-image class="img" width="50" height="50" :src="$getUrl(info.head_img)" @click="$router.push(`/user/userInfo?id=${info.user_id}`)" />
            <div class="contact">
                <div class="phone">{{info.name}}</div>
                <!-- <div class="phone">联系方式：{{info.contact}}</div> -->
            </div>
        </div>
    </div>
    <div class="body">
        <div class="title" style="margin-bottom: 6px;">发布日期：</div>
        <div class="text">{{info.add_time}}</div>
    </div>
    <div class="body">
        <div class="title" style="margin-bottom: 6px;">地址：</div>
        <div class="text">{{info.address}}</div>
    </div>
    <div class="body">
        <div class="title" style="margin-bottom: 6px;">联系方式</div>
        <div class="text">{{info.contact}}</div>
    </div>
    <div class="body">
        <div class="title" style="margin-bottom: 6px;">任务信息</div>
        <div class="text" style="padding-bottom: 10px;">{{info.info}}</div>
        <!-- <div class="text" style="margin-bottom: 0;">发布日期：{{info.add_time}}</div> -->
        <!-- <div class="text" style="margin-bottom: 5px;">备注：{{info.info}}</div> -->
    </div>
    <div class="enlist-body" v-if="info.is_owner==1">
        <div class="title">申请列表</div>
        <div class="enlist-list">
            <van-list v-model="loading" :finished="finished" style=" width: 100%;" @load="apply">
                <div class="item" v-for="(item,index) in list" :key="index" :title="item">
                    <div class="head">
                        <img class="img" @click="$router.push(`/user/userInfo?id=${item.user_id}`)" :src="item.display==1?img:$getUrl(item.head_img)" alt />
                        <div class="info">
                            <div class="name">{{item.display==1?item.user_id:item.name}}</div>
                            <div class="time">{{item.add_time}}报名</div>
                            <div v-if="item.display==0">
                                <div class="enlist-label">性别：</div>
                                <span>{{item.gender | sex }}</span>
                            </div>
                            <div>
                                <div class="enlist-label">联系方式：</div>
                                <span>{{item.phone?item.phone:"--"}}</span>
                            </div>
                            <div v-if="item.display==0">
                                <div class="enlist-label">出生日期：</div>
                                <span>{{item.birthday?item.birthday:"--"}}</span>
                            </div>
                            <div v-if="item.display==0">
                                <div class="enlist-label">专业技能：</div>
                                <span>{{item.skill?item.skill:"--"}}</span>
                            </div>
                            <div class="text">{{item.text}}</div>
                        </div>
                        <div class="btn-box">
                            <!-- 自己&&上架&&招募中 -->
                            <template v-if="info.is_owner==1&&info.is_up==1&&info.task_state==2">
                                <div class="btn" v-if="info.join_user==0" @click="select(item.user_id)">选他</div>
                            </template>
                            <template v-if="info.join_user!=0">
                                <div v-if="index==0">开发者</div>
                            </template>
                        </div>
                    </div>
                </div>
            </van-list>
        </div>
        <van-divider dashed v-if="list.length<=0">暂无申请人</van-divider>
    </div>

    <div class="fixed">
        <div class="help">
            <div class="help-btn" @click="$router.push('/user/help')">
                <van-icon size="18px" style="margin-right: 10px;" name="question-o" />帮助
            </div>
        </div>

        <!-- 等于1是自己发布的 -->
    </div>

    <div class="footer">
        <template v-if="info.is_owner==1">
            <!-- 任务状态为1 待支付 -->
            <template v-if="info.task_state==1">
                <van-button class="border-radius" color="#4289DB" size="large" @click.stop="$router.push(`/amount/deposit?task_order=${info.task_order}&&price=${info.price}`)">待支付</van-button>
            </template>
            <template v-else>
                <!--  任务状态为2 招募中 -->
                <template v-if="info.task_state==2">
                    <template v-if="info.is_up==0">
                        <van-button class="border-radius" color="#4289DB" size="large" @click="save1(info)">上架</van-button>
                    </template>
                    <template v-if="info.is_up==1">
                        <van-button class="border-radius" color="#4289DB" size="large" @click="save2(info)">下架</van-button>
                    </template>
                </template>
                <!--  任务状态为3 进行中-->
                <template v-if="info.task_state==3">
                    <!-- doing /task/bossSuccess -->
                    <van-button @click="confirm2(info)" class="border-radius" color="#4289DB" size="large">确认完成任务</van-button>
                </template>
                <!--  任务状态为4 任务完成-->
                <template v-if="info.task_state==4">
                    <van-button class="border-radius" color="#4289DB" size="large" disabled>任务完成</van-button>
                </template>
                <!--  任务状态为5 任务申诉中-->
                <template v-if="info.task_state==5">
                    <van-button class="border-radius" color="#4289DB" size="large" disabled>任务申诉中</van-button>
                </template>

                <div class="box" v-if="info.task_state!=1&&info.task_state!=5">
                    <!-- doing 方法未改 -->
                    <van-button @click="$router.push(`/task/appeal?id=${info.id}`)" style="margin-top:5px" class="border-radius" type="danger" size="large">申诉任务</van-button>
                </div>
            </template>
        </template>

        <!-- 等于0是别人发布的 -->
        <template v-if="info.is_owner==0">
            <!-- 任务状态为2 招募中 -->
            <template v-if="info.task_state==2">
                <template v-if="info.is_up==0">
                    <van-button class="border-radius" color="#4289DB" size="large" disabled>任务已下架</van-button>
                </template>
                <template v-if="info.is_up==1">
                    <template v-if="info.is_join==0">
                        <van-button class="border-radius" color="#4289DB" size="large" @click="$router.push(`/enroll?id=${info.id}`)">参与项目</van-button>
                    </template>
                    <template v-if="info.is_join==1">
                        <van-button class="border-radius" color="#4289DB" size="large" disabled>已申请</van-button>
                    </template>
                </template>
            </template>
            <!--  任务状态为3 进行中-->
            <template v-if="info.task_state==3  ">
                <template v-if="info.is_join==0">
                    <van-button class="border-radius" color="#4289DB" size="large" disabled>您已错过此次任务</van-button>
                </template>
                <template v-if="info.is_join==1">
                    <van-button class="border-radius" color="#4289DB" size="large" disabled>您的申请没有通过</van-button>
                </template>
                <template v-if="info.is_join==2">
                    <!-- <van-button class="border-radius" color="#4289DB" size="large" @click="confirm1(info)">确认完成</van-button> -->
                    <van-button class="border-radius" color="#4289DB" size="large" disabled>进行中</van-button>
                </template>
            </template>
            <!--  任务状态为4 进行中-->
            <template v-if="info.task_state==4">
                <van-button class="border-radius" color="#4289DB" size="large" disabled>任务完成</van-button>
            </template>
            <!--  任务状态为5 进行中-->
            <template v-if="info.task_state==5">
                <van-button class="border-radius" color="#4289DB" size="large" disabled>任务申诉中</van-button>
            </template>
        </template>
    </div>
</div>
</template>

<script src="./index.js"></script>

<style lang="scss" scoped>
@import "index.scss";
</style>
