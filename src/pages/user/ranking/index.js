export default {
  name: 'ranking',
  layout: "sub",
  data() {
    return {
      active: 0, //外层选项卡
      active1: 0, //内层选项卡
      loading: false,
      finished: true,
      list: [],
      finish_num: {}, //完成任务数量
      finish_money: {}, //完成获利金额
      publish_num: {}, //发布任务数量
      publish_money: {}, //发布任务金额
      name: "",
      query: {
        type: 1,
        page: 1,
        page_size: 3
      }
    };
  },
  methods: {
    // 用于初始化一些数据
    init() {
        this.top();
      this.update();
     
    },
    // 用于更新一些数据
    async update() {
      //type 
      //1 已完成任务数量排序
      //2 已完成任务收入排序
      //3 已发布任务数量排序
      //4 已发布任务金额排序
      this.loading =true;
      const res = await this.$http.post('/top/list', this.query);
      if (res.code > 0) {
        this.list = [...this.list,...res.data];
        this.query.page = this.query.page + 1
          this.loading = false;
          this.finished = false;
          if (res.total < 3) {
            this.finished = true;
          }
      }else{
          this.finished =true;
      }
    },
    select() {
        this.list = [];
        this.query.page = 1;
      if (this.active == 0) {
        if (this.active1 == 0) {
            this.query.type = 1;
       
            this.update();
        } else {
            console.log(this.active1)
            this.query.type= 2;
            this.update();
        }
      } else {
        if (this.active1 == 0) {
            this.query.type = 3;
            this.update();
        } else {
            this.query.type = 4;
            this.update();
        }
      }
    },
    
    onLoad() {
        this.update();
    },
    async top() {
      const res = await this.$http.post('/top/top', {
      });
      if (res.code >= 0) {
        this.finish_num = res.data.finish_num; //完成任务数量
        this.finish_money = res.data.finish_money; //完成获利金额
        this.publish_num = res.data.publish_num; //发布任务数量
        this.publish_money = res.data.publish_money; //发布任务金额
        this.name = res.data.name
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
