export default {
  name: 'info',
  layout: 'sub',
  data() {
    return {
      state: false,
      list: [],
      loading: false,
      finished: false,
      info: {}
    };
  },
  methods: {
    // 用于初始化一些数据
    init() {
      this.update();
    },
    // 用于更新一些数据
    async update() {
      const res = await this.$http.post('/task/info', {
        task_id: this.$route.query.task_id
      });
      if (res.code >= 0) {
        this.info = res.data;
      }
    },
    async onLoad() {

    },
    confirm1(e) {
      this.$dialog.confirm({
        message: '确认完成',
      }).then(async () => {
        const res = await this.$http.post('/task/codeSuccess', {
          task_id: e
        });
        if (res.code >= 0) {
          this.$toast("操作成功");
          this.update();
        } else {
          this.$toast(res.msg);
        }
      }).catch(() => {

      })

    },
    confirm2(e) {
      this.$dialog.confirm({
        message: '确认完成',
      }).then(async () => {
        const res = await this.$http.post('/task/codeSuccess', {
          task_id: e
        });
        if (res.code >= 0) {
          this.$toast("操作成功");
          this.update();
        } else {
          this.$toast(res.msg);
        }
      }).catch(() => {

      })
    },
    quxiao(e) {
      this.$dialog.confirm({
        message: '确认中止',
      }).then(async () => {
        const res = await this.$http.post('/task/stop', {
          task_id: e
        });
        if (res.code >= 0) {
          this.$toast("操作成功");
          this.update();
        } else {
          this.$toast(res.msg);
        }
      }).catch(() => {

      })
    },
    async select(item) {
      console.log(item)
      const res = await this.$http.post('/task/chose', {
        join_user: item,
        task_id: this.$route.query.task_id
      });
      if (res.code >= 0) {
        this.$toast('选择成功');
        this.update();
      } else {
        this.$toast(res.msg);
      }
    },

    async save1(e) {
      const res = await this.$http.post('/task/save', {
        is_up: 1,
        id: e.id
      });
      if (res.code >= 0) {
        this.$toast('操作成功');
        this.update();
      } else {
        this.$toast(res.msg);
      }
    },
    async save2(e) {
      const res = await this.$http.post('/task/save', {
        is_up: 0,
        id: e.id
      });
      if (res.code >= 0) {
        this.$toast('操作成功');
        this.update();
      } else {
        this.$toast(res.msg);
      }
    }
  },
  // 计算属性
  computed: {},
  // 包含 Vue 实例可用过滤器的哈希表。
  filters: {},
  // 在实例创建完成后被立即调用
  created() {},
  // 在挂载开始之前被调用：相关的 render 函数首次被调用。
  beforeMount() {},
  // el 被新创建的 vm.el 替换，并挂载到实例上去之后调用该钩子。
  mounted() {

    this.$nextTick(() => {
      this.init();
    });
  },
  // 数据更新时调用，发生在虚拟 DOM 打补丁之前。
  beforeUpdate() {},
  // keep-alive 组件激活时调用。
  activated() {},
  // keep-alive 组件停用时调用。
  deactivated() {},
  // 实例销毁之前调用。在这一步，实例仍然完全可用。
  beforeDestroy() {},
  //Vue 实例销毁后调用。
  destroyed() {},
  // 当捕获一个来自子孙组件的错误时被调用。
  errorCaptured() {},
  // 包含 Vue 实例可用指令的哈希表。
  directives: {},
  // 一个对象，键是需要观察的表达式，值是对应回调函数。
  watch: {},
  // 组件列表
  components: {},
};
