export default {
    name: 'room',
    data() {
        return {
            list: [],
            total: -1,
            time: null,
            loading: false,
            readRoomIdList: [],
        };
    },
    methods: {
        // 用于初始化一些数据
        init() {

            this.time = setInterval(() => {
                this.update();
            }, 3000);

            this.update();
        },
        // 用于更新一些数据
        async update() {
            this.loading = true;
            const res = await this.$http.post('/chat/room/list', {});
            this.loading = false;

            let local = this.list.map(el => ({ room_id: el.room_id, total: el.total }));
            let socal = res.data.map(el => ({ room_id: el.room_id, total: el.total }));


            local.forEach(el => {

                let sitem = socal.find(ell => ell.room_id == el.room_id)
                if (sitem.total > el.total) {
                    let item = this.readRoomIdList.find(elll => elll.room_id == el.room_id);
                    if (item) {
                        item.total += sitem.total - el.total;
                        this.readRoomIdList.splice(this.readRoomIdList.findIndex(elll => elll.room_id == el.room_id), 1, item);
                    } else {
                        this.readRoomIdList.push({
                            room_id: el.room_id,
                            total: sitem.total - el.total
                        });
                    }

                }

            });

            localStorage.readRoomIdList = JSON.stringify(this.readRoomIdList);

            this.list = res.data;
            this.total = res.total;

        },
        isNoCount(room_id) {
            return true;
        },
        getNoCount(room_id) {

            let item = this.readRoomIdList.find(el => el.room_id == room_id)

            if (item) {
                return item.total;
            } else {
                return 0;
            }



        },
        go(room_id) {
            this.readRoomIdList = this.readRoomIdList.filter(el => el.room_id != room_id);
            this.$router.push(`/chat?room_id=${room_id}`);
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
        if (typeof localStorage.readRoomIdList == 'undefined') {

        } else {
            this.readRoomIdList = JSON.parse(localStorage.readRoomIdList);
        }

        this.$nextTick(() => { });
    },
    // 数据更新时调用，发生在虚拟 DOM 打补丁之前。
    beforeUpdate() { },
    // keep-alive 组件激活时调用。
    activated() { },
    // keep-alive 组件停用时调用。
    deactivated() { },
    // 实例销毁之前调用。在这一步，实例仍然完全可用。
    beforeDestroy() {
        localStorage.readRoomIdList = JSON.stringify(this.readRoomIdList);
        clearInterval(this.time)
    },
    //Vue 实例销毁后调用。
    destroyed() { },
    // 当捕获一个来自子孙组件的错误时被调用。
    errorCaptured() { },
    // 包含 Vue 实例可用指令的哈希表。
    directives: {},
    // 一个对象，键是需要观察的表达式，值是对应回调函数。
    watch: {
        list: {
            handler(a, b) {
            },
            deep: true
        }
    },
    // 组件列表
    components: {},
};