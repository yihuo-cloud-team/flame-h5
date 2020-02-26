import areaList from "@/plugins/lib/area";
// const map = new AMap.Map('container', {
//     resizeEnable: true
// });
export default {
  name: 'search',
  layout: 'sub',
  data() {
    return {
      value1: 0,
      value2: 0,
      zhuangtai: false,
      areaList: areaList,
      option1: [{
          text: '所有类型',
          value: 0
        },
        {
          text: '已完成',
          value: 1
        },
        {
          text: '未完成',
          value: 2
        }
      ],
      option2: [{
          text: '所有进度',
          value: 0
        },
        {
          text: '进行中',
          value: 1
        },
        {
          text: '已结束',
          value: 2
        },
      ],
      list: [],
      loading: false,
      finished: false,
      keyword: '',
      addressKeyword: '',
      show: false,
      Areaval: [],
      TipsArr: [],
      areaval: '',
      addresstitle: '',
      CurrentAddress: '',
      location: '',
      query: {

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
      // AMap.plugin('AMap.Geolocation', () => {
      //   var geolocation = new AMap.Geolocation({
      //     enableHighAccuracy: true, //是否使用高精度定位，默认:true
      //     timeout: 10000, //超过10秒后停止定位，默认：5s
      //   });
      //   map.addControl(geolocation);
      //   geolocation.getCurrentPosition((status, result) => {
      //       console.log(result)
      //     if (status == 'complete') {
          
      //       this.CurrentAddress = result.addressComponent;
      //       this.addressKeyword = result.addressComponent.street + result.addressComponent.streetNumber;
      //       this.location = `${result.position.lng},${result.position.lat}`;
      //       this.areaval = result.addressComponent.adcode;
      //       this.addresstitle = result.addressComponent.province;
      //     } else {

      //     }
      //   });

      // });
    },
    ok(){

    },
    quxiao(){

    },
    async onLoad() {

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
