export default {
  name: 'cash',
  layout: 'sub',
  data() {
    return {
      number: '',
      name: '',
      quota: '',

      info: {},
      query: {
        money_type: "1",
        account: "",
        real_name: "",
        money: ""
      }
    };
  },
  methods: {
    // 用于初始化一些数据
    init() {
      this.update();
    },
    // 用于更新一些数据
    async update() {
      const res = await this.$http.post('/user/info', {});
      console.log(res.data)
      if (res.code >= 0) {

        this.info = res.data
      }
    },
    async submit() {
      if (this.query.account == '') {
        this.$toast("请输入卡号或者微信号")
        return false
      }
      if (this.query.real_name == '') {
        this.$toast("请输入真实姓名")
        return false
      }
      if (this.query.money == '') {
        this.$toast("请输入金额")
        return false
      }
      const res = await this.$http.post('/order/getMoney', this.query);
      if (res.code >= 0) {
        this.$toast('操作成功')
        this.query.account = '';
        this.query.real_name = '';
        this.query.money = '';
        this.update();
      } else {
        this.$toast(res.msg)
      }
    },
    tixian() {
        this.$router.push('/amount/record?type=2')
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
