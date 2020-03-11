import areaList from "@/plugins/lib/area";
// const map = new AMap.Map('container', {
//     resizeEnable: true
// });
export default {
  name: 'search',
  layout: 'sub',
  data() {
    return {
      areaList: areaList,
      option1: [{
          text: '全部类别',
          value: ''
        },
        {
          text: '翻译',
          value: 1
        },
        {
          text: '软件',
          value: 2
        },
        {
          text: '设计',
          value: 3
        },
        {
          text: '其他',
          value: 4
        }
      ],
      option2: [{
          text: '所有进度',
          value: ''
        },
        {
          text: '招募中',
          value: 0
        },
        {
          text: '进行中',
          value: 2
        },

        {
          text: '完成',
          value: 4
        }
      ],
      list: [],
      loading: false,
      finished: true,
      show: false,
      Areaval: '110101',
      AreaArr: [],
      district: '暂无定位',
      query: {
        search: '',
        page: 1,
        page_size: 10,
        task_type: '',
        task_state: '',
        a: ''
      },
      info:{}
    };
  },
  methods: {
    // 用于初始化一些数据
    init() {
      this.getAddress();
      this.httpConfig();
    },
    async httpConfig() {

      let res = await this.$http.post('/config/list', this.query);
      if(res.code>=0){
          res.data.map((el)=>{
     
            if(el.key.indexOf('searchInfo')!=-1 ){
                this.info = el.value     
            }
          })
      }
    },
    // 用于更新一些数据
    async update() {
      try {
        let res = await this.$http.post('/task/list', this.query)
        if (res.code > 0) {
          this.list = [...this.list, ...res.data]
          this.query.page = this.query.page + 1
          this.loading = false;
          this.finished = false;
          if (res.total < 10) {
            this.finished = true;
          }
        } else {
          this.finished = true;
        }
      } catch (error) {}
    },
    search() {
      this.query.page = 1
      this.list = []
      this.update()
    },
    getAddress() {
      let mapObj = new AMap.Map('iCenter');
      mapObj.plugin('AMap.Geolocation', () => {
        let geolocation = new AMap.Geolocation({
          enableHighAccuracy: true, //是否使用高精度定位，默认:true
        });
        geolocation.getCurrentPosition((status, result) => {
          if (status == 'complete') {
            this.Areaval = result.addressComponent.adcode
            // this.query.a = result.addressComponent.adcode
            this.district = result.addressComponent.district
            
            this.update();
          } else {
            console.warn(status, '定位失败');
            this.update();
          }
        });
      })
    },
    confirm(e) {
      this.AreaArr = e;
      this.district = e[2].name;
      this.query.a = e[2].code;
      this.search();
      this.show = false;
    },
    cancel() {
      this.show = false;
    },

  },
  // 计算属性
  computed: {
    
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
  watch: {},
  // 组件列表
  components: {},
};
