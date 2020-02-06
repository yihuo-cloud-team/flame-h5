export default {
    name: 'list',
    data() {
        return {
            list: [],
            loading: false,
            finished: false,
            total: 0,
            query: {
                page: 1,
                page_size: 5,
            },
            userInfo: null
        };
    },
    methods: {
        // 用于初始化一些数据
        init() {
            this.userInfo = JSON.parse(localStorage.userInfo);
        },
        async updateInit() {
            this.query = {
                page: 1,
                page_size: 5,
            };
            this.total = 0;
            this.list = [];
            this.finished = false;
            this.loading = false;
            this.update();

        },
        // 用于更新一些数据
        async update() {
            if (this.finished) return;
            try {
                this.loading = true;
                const res = await this.$http.post('/idea/list', this.query);
                if (res.code > 0) {
                    this.total = res.total;
                    this.list = [...this.list, ...res.data];
                    this.query.page += 1;
                }
                if (this.list.length >= this.total) {
                    this.finished = true;
                }
                this.loading = false;
            } catch (error) {
                this.loading = false;
            }

        },
        async zan(item) {
            let loading = this.$toast.loading({ message: '点赞中...' });
            const res = await this.$http.post('/idea/up', { id: item.id });
            item.isUp = res.isUp;
            item.up = res.up;
            loading.clear();
        },
        async del(item) {
            const res = await this.$http.post('/idea/del', { id: item.id });
            this.updateInit();
        },
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
    deactivated() { },
    // 实例销毁之前调用。在这一步，实例仍然完全可用。
    beforeDestroy() { },
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