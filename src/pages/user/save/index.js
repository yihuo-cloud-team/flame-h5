export default {
    name: 'user',
    layout: 'sub',
    data() {
        return {
            userInfo: null,
            checked: true,
            name: '',
            skill: '',
            phone: '',
            radio: '',
            sex: 1,
            param: '1',
            show: false,
            tiem: '',
            tiemtext: '请选择日期',
            minDate: new Date(1950, 0, 1),
            maxDate: new Date(2025, 10, 1),
            currentDate: new Date()
        };
    },
    methods: {
        // 用于初始化一些数据
        init() {
            this.update();
        },
        // 用于更新一些数据
        async update() {
            // this.userInfo = JSON.parse(localStorage.userInfo);
        },

        signOut() {
            localStorage.clear();
            this.$router.replace("/login");
        },
        formatter(type, val) {
            if (type === 'year') {
                return `${val}年`;
            } else if (type === 'month') {
                return `${val}月`
            } else {
                return `${val}日`
            }
        },
        getTiem(e) {
            let Tiem = `${e.getFullYear()}-${(e.getMonth() + 1) < 10 ? '0' + (e.getMonth() + 1) : (e.getMonth() + 1)}-${e.getDate()}`
            this.tiem = Tiem
            this.tiemtext = `${e.getFullYear()}年${(e.getMonth() + 1) < 10 ? '0' + (e.getMonth() + 1) : (e.getMonth() + 1)}月${e.getDate()}日`
            this.show = !this.show
        }
    },
    // 计算属性
    computed: {
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