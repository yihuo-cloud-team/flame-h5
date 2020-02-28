export default {
  name: 'deposit',
  layout: 'sub',
  data() {
    return {
      price: "",

    };
  },
  methods: {
    // 用于初始化一些数据
    init() {
      this.update();
    },
    // 用于更新一些数据
    async update() {
      this.price = this.$route.query.price
    },
    async submit() {
      const payInfo = await this.$http.post('/order/getH5', {
        task_order: this.$route.query.task_order
      });

      if (payInfo.code >= 0) {

        WeixinJSBridge.invoke(
          'getBrandWCPayRequest', {
            "appId": payInfo.data.appId, //公众号名称，由商户传入     
            "timeStamp": payInfo.data.timestamp, //时间戳，自1970年以来的秒数     
            "nonceStr": payInfo.data.nonceStr, //随机串     
            "package": payInfo.data.package,
            "signType": payInfo.data.signType, //微信签名方式：     
            "paySign": payInfo.data.paySign //微信签名 
          },
          (res) => {
            if (res.err_msg == "get_brand_wcpay_request:ok") {
              // 使用以上方式判断前端返回,微信团队郑重提示：
              //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
              this.$toast("支付成功");
              this.$router.replace('/task/release');
            }
            if (res.err_msg == "get_brand_wcpay_request:cancel") {
              // 使用以上方式判断前端返回,微信团队郑重提示：
              //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
              this.$toast("取消支付");
            }
            if (res.err_msg == "get_brand_wcpay_request:fail") {
              // 使用以上方式判断前端返回,微信团队郑重提示：
              //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
              this.$toast("支付失败");
            }
          }
        );
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
