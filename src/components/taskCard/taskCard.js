export default {
  name: 'taskCard',
  layout: 'sub',
  data() {
    return {
      task_stateList:[
        {title:'待支付',task_state:1},
        {title:'招募中',task_state:2},
        {title:'进行中',task_state:3},
        {title:'完成',task_state:4},
        {title:'申诉',task_state:5},
      ],
      isMe:false,
      show: false,
      actions: [
        { name: '上架' },
        { name: '下架' },
        { name: '申诉' },
      ],
    };
  },
  props: {
    info: {
      type: Object,
      default: {
      }
    },
  },
  methods: {
    // 用于初始化一些数据
    init() {
      this.update();
    },
    // 用于更新一些数据
    update() {
      if(this.info.user_id==JSON.parse(localStorage.userInfo).id) this.isMe=true
    },
    onSelect(item){
      console.log(item)
      if(item.name=='上架'){
        this.save1(this.info);
      }
      if(item.name=='下架'){
        this.save2(this.info);
      }
      if(item.name=='申诉'){
        this.goAppeal()
      }

    },
    async save1(e) {
      this.$dialog.confirm({
        message: '是否上架',
      }).then(async () => {
        const res = await this.$http.post('/task/updateState', {
          is_up: 1,
          task_id: e.id
        });
        if (res.code >= 0) {
          this.$toast('操作成功');
          this.show=false;
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
          task_id: e.id
        });
        if (res.code >= 0) {
          this.$toast('操作成功');
          this.show=false;
          this.update();
        } else {
          this.$toast(res.msg);
        }
      }).catch(() => {

      })

    },
    goAppeal(){
      this.$router.push(`/task/appeal?id=${this.info.id}`);
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
  watch: {
    // parentQuery(val){
    //   this.parentQuery = val;
    
    // },
    // parentYue(val){
    //   this.parentYue = val;
    //   console.log(val)
    // }
  },
  // 组件列表
  components: {},
};
