export default {
  name: 'list',
  layout: 'sub',
  data() {
    return {
      userInfo: null,
      list: [],
      loading: false,
      finished: false,
      page: 1,
      page_size: 10

    };
  },
  methods: {
    // 用于初始化一些数据
    init() {
      // this.userInfo = JSON.parse(localStorage.userInfo);
      this.update();
    },
    // 用于更新一些数据
    async update() {

      this.loading = true
      const res = await this.$http.post('/task/get/list', {
        page: this.page,
        page_size: 10
      });
      if (res.code > 0) {
        res.data.map((el) => {
          el.add_time = this.dateDiff(el.add_time * 1000);
        })
        this.loading = false;
        this.list = [...this.list, ...res.data];
      } else {      
        this.finished = true;
      }
   
    },
    async onLoad() {
        this.page = ++this.page;
        this.update();
      },
      dateDiff(hisTime, nowTime) {
        var now = nowTime ? nowTime : new Date().getTime(),
          diffValue = now - hisTime,
          result = '',
          minute = 1000 * 60,
          hour = minute * 60,
          day = hour * 24,
          halfamonth = day * 15,
          month = day * 30,
          year = month * 12,
  
          _year = diffValue / year,
          _month = diffValue / month,
          _week = diffValue / (7 * day),
          _day = diffValue / day,
          _hour = diffValue / hour,
          _min = diffValue / minute;
  
        if (_year >= 1) result = parseInt(_year) + "年前";
        else if (_month >= 1) result = parseInt(_month) + "个月前";
        else if (_week >= 1) result = parseInt(_week) + "周前";
        else if (_day >= 1) result = parseInt(_day) + "天前";
        else if (_hour >= 1) result = parseInt(_hour) + "个小时前";
        else if (_min >= 1) result = parseInt(_min) + "分钟前";
        else result = "刚刚";
        return result;
  
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
    this.init();
    this.$nextTick(() => {});
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
