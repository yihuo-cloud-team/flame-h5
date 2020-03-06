import AreaList from '../../../lib/area'
export default {
  name: 'edit',
  layout: 'sub',
  data() {
    return {
      form: {
        name: "", //任务名称
        task_type: "", //任务类型
        price: "", //任务价格
        info: "", //任务详情
        p: "", //省
        c: "", //市
        a: "", //区
        contact: "", //联系方式
        cycle: "", //任务周期
        address: "", //详细地址
        img: "", //图片
      },
      areaList: [],
      selecarea: [],
      show: false
    };
  },
  methods: {
    // 用于初始化一些数据
    init() {
      this.areaList = AreaList
      this.update();
    },
    // 用于更新一些数据
    async update() {
      if (this.$route.query.id) {
        const res = await this.$http.post('/task/info', {
          task_id: this.$route.query.id
        });
        if (res.code >= 0) {
          this.form = res.data;
          this.form.id = this.$route.query.id;
          this.selecarea.push(res.data.p, res.data.c, res.data.a)

        }
      }

    },
    selec(e) {
      this.selecarea = []
      this.selecarea.push(e[0].code, e[1].code, e[2].code);
      this.form.p = e[0].code;
      this.form.c = e[1].code;
      this.form.a = e[2].code;
      this.show = false;
    },
    async submit() {
      const res = await this.$http.post('/task/save', this.form);
      if (res.code >= 0) {
        this.$toast('操作成功');
        this.$router.go(-1);
      } else {
        this.$toast(res.msg);
      }

    }
  },
  // 计算属性
  computed: {
    area() {
      if (this.selecarea.length < 1) return '省市区选择';

      const Area = this.areaList;
      return Area.province_list[this.selecarea[0]] + Area.city_list[this.selecarea[1]] + Area.county_list[this.selecarea[2]]
    }
  },
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
  watch: {

  },
  // 组件列表
  components: {

  },
};
