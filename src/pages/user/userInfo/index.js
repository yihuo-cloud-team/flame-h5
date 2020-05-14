export default {
    name: 'userInfo',
    layout: 'sub',
    data() {
        return {
            current: 0,
            userInfo: {
            },
            userInfo_id: ''
        };
    },
    methods: {
        // 用于初始化一些数据
        init() {
            this.userInfo_id = JSON.parse(localStorage.userInfo).id
            this.update();
        },
        // 用于更新一些数据
        async update() {
            if (!this.get_id) {
                let res = await this.$http.post('/user/save_info', {
                    id: this.$route.query.id
                });
                if (res.code > 0) {
                    this.userInfo = res.data;
                }
            } else {
                let res = await this.$http.post('/user/save_info', {});
                if (res.code > 0) {
                    this.userInfo = res.data;
                }
            }

        },
        onChange(index) {
            this.current = index;
        },
        preview() {
            let arr = this.userInfo.img_list.map(el => this.$getUrl(el))
            this.$imagePreview({
                images: arr,
                startPosition: this.current,
                // closeable: true,
            });
        },
        async message() {
            const res = await this.$http.post('/chat/link', {
                target_id: this.$route.query.id
            });
            this.$router.push(`/chat?room_id=${res.data}`)
        }
    },
    // 计算属性
    computed: {
        get_id() {
            return typeof this.$route.query.id == 'undefined'
        }
    },
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