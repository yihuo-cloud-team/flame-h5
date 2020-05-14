export default {
    name: 'msg',
    layout: 'sub',
    data() {
        return {
            query: {
                room_id: this.$route.query.room_id,//收件人
                page: 2,
                page_size: 10
            },
            user_id: localStorage.user_id,
            list: [],
            total: 0,
            msg: '',
            time: null,
            loadingOld: false,
            isSendLoading: false,
            url: '',
        };
    },
    methods: {
        // 用于初始化一些数据
        init() {

            this.time = setInterval(() => {
                this.update();
            }, 3000);


            this.$refs['msg-box'].addEventListener("scroll", (e) => {
                this.updateTO(e)
            });

            this.update();
        },
        updateTO(e) {
            let top = this.$refs['msg-box'].scrollTop;
            if (top <= 0) {
                this.updateOld();
            }
        },

        async updateOld() {
            this.loadingOld = true;
            const res = await this.$http.post('/chat/room/content/list', this.query);
            this.loadingOld = false;
            await this.$nextTick(() => { });
            if (res.code > 0) {
                this.query.page++;
                this.list = [...res.data, ...this.list];
            }

        },
        // 用于更新一些数据
        async update() {
            const res = await this.$http.post('/chat/room/content/list', {
                room_id: this.$route.query.room_id,//收件人
                page: 1,
                page_size: 10
            });
            await this.$nextTick(() => { });
            if (this.total != res.total) {
                this.updateInit()
                this.list = res.data;
                await this.$nextTick(() => { });
                this.updateUI()
            }
            this.total = res.total;
        },
        updateInit() {
            this.query = {
                room_id: this.$route.query.room_id,//收件人
                page: 2,
                page_size: 10
            };
        },
        updateUI() {
            let ele = this.$refs['msg-box'];
            if (ele) {
                ele.scrollTop = ele.scrollHeight;
            }
        },
        async sendText() {
            if (this.msg.length <= 0) {
                this.$toast('消息不能为空～');
                return;
            }
            this.isSendLoading = true;
            const res = await this.$http.post('/chat/send', {
                room_id: this.query.room_id,
                msg: this.msg,
                msg_type: 1//文字类型，2为图片类型
            });
            this.isSendLoading = false;
            this.updateInit()
            this.msg = '';
            this.update();
        },
        async sendImage(url) {

            this.isSendLoading = true;
            const res = await this.$http.post('/chat/send', {
                room_id: this.query.room_id,
                msg: url,
                msg_type: 2//文字类型，2为图片类型
            });
            this.isSendLoading = false;
            this.updateInit()
            this.url = '';
            this.update();
        }
    },
    // 计算属性
    computed: {},
    // 包含 Vue 实例可用过滤器的哈希表。
    filters: {},
    // 在实例创建完成后被立即调用
    created() { },
    // 在挂载开始之前被调用：相关的 render 函数首次被调用。
    beforeMount() { },
    // el 被新创建的 vm.el 替换，并挂载到实例上去之后调用该钩子。
    mounted() {
        this.init();
        this.$nextTick(() => { });
    },
    // 数据更新时调用，发生在虚拟 DOM 打补丁之前。
    beforeUpdate() { },
    // keep-alive 组件激活时调用。
    activated() { },
    // keep-alive 组件停用时调用。
    deactivated() {
    },
    // 实例销毁之前调用。在这一步，实例仍然完全可用。
    beforeDestroy() {
        clearInterval(this.time)
    },
    //Vue 实例销毁后调用。
    destroyed() { },
    // 当捕获一个来自子孙组件的错误时被调用。
    errorCaptured() { },
    // 包含 Vue 实例可用指令的哈希表。
    directives: {},
    // 一个对象，键是需要观察的表达式，值是对应回调函数。
    watch: {},
    // 组件列表
    components: {},
};