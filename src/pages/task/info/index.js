export default {
  name: 'info',
  layout: 'sub',
  data() {
    return {
      state: false,
      list: [],
      loading: false,
      finished: false,
      info: {},
      list: [],
      page: 0,
      page_size: 10
    };
  },
  methods: {
    // 用于初始化一些数据
    init() {
      this.update();
      // this.apply();
    },
    // 用于更新一些数据
    async update() {

      const res = await this.$http.post('/task/info/ai', {
        task_id: this.$route.query.task_id
      });
      if (res.code >= 0) {
        this.info = res.data;
      }
    },

    async apply() {
      if (this.finished) return;
      this.loading = true;
      const res = await this.$http.post('/task/applyList', {
        task_id: this.$route.query.task_id,
        page: this.page,
        page_size: this.page_size
      });
      if (res.code > 0) {
        this.loading = false;
        this.list = [...this.list, ...res.data];
      }
      if (this.list.length >= res.total) {
        this.finished = true;
      }
      this.loading = false;
      this.page++;
    },

    //开发者确认完成
    confirm1(e) {
      this.$dialog.confirm({
        message: '确认完成',
      }).then(async () => {
        const res = await this.$http.post('/task/updateState', {
          id: e.id,
          task_state: 5
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
    //发布者确认
    confirm2(e) {
      this.$dialog.confirm({
        message: '确认完成',
      }).then(async () => {
        const res = await this.$http.post('/task/bossSuccess', {
          task_id: e.id,
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
    //发布者中止任务
    quxiao(e) {
      this.$dialog.confirm({
        message: '确认中止',
      }).then(async () => {
        const res = await this.$http.post('/task/updateState', {
          id: e.id,
          task_state: 3,
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
    //选择开发者
    async select(item) {
      this.$dialog.confirm({
        message: '确认选择他',
      }).then(async () => {
        const res = await this.$http.post('/task/chose', {
          join_user: item,
          task_id: this.$route.query.task_id
        });
        if (res.code >= 0) {
          this.$toast('选择成功');
          this.page = 1;
          this.list = [];
          this.update();
          this.apply();
        } else {
          this.$toast(res.msg);
        }
      }).catch(() => {

      })
    },
    //上架
    async save1(e) {
      this.$dialog.confirm({
        message: '是否上架',
      }).then(async () => {
        const res = await this.$http.post('/task/updateState', {
          is_up: 1,
          id: e.id
        });
        if (res.code >= 0) {
          this.$toast('操作成功');

          this.update();
        } else {
          this.$toast(res.msg);
        }
      }).catch(() => {

      })
    },
    //下架
    async save2(e) {
      this.$dialog.confirm({
        message: '是否下架',
      }).then(async () => {
        const res = await this.$http.post('/task/updateState', {
          is_up: 0,
          id: e.id
        });
        if (res.code >= 0) {
          this.$toast('操作成功');
          this.update();
        } else {
          this.$toast(res.msg);
        }
      }).catch(() => {

      })

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
