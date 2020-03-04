export default {
  name: 'list',
  data() {
    return {
      userInfo: null,
      list: [],
      loading: false,
      finished: false,
      moveList: [],


        page: 1,
        page_size: 10

    };
  },
  methods: {
    // 用于初始化一些数据
    init() {
      // localStorage.jwt = 'eyJpdiI6InljQWZaWjRDMitFdVowczhtSVV1RGc9PSIsInZhbHVlIjoiQjBSb3lXSHRUMjRjeFBWQ3lOa1JIQTJFRzRicm1tcDhzYVBydTdRSXNoYUtGa0s1S2szVlVhNG5NbHV0K2llOWJ4RVd5UzJxRjZGSVE0dG05YXdsSDNycG9hYTVxaURJQzROdGZnaXFTNUVKXC9QbUpCOGJ1SVRWZEtFTVFnK2VPT3c5aEwyYUE4b2IzY0xIS1YwV0c1WUpsNEFnQ0FYQ0p0TG9icjc0dEY2VzRJRWo3ZHlsck03VklJeGJPR1wvTlVic1RxaTN1VzIwcnZGV1RUZDFlRmkxa1Q1bldYckNBaFFyUWIyektXVWpGaUw0R0VOVnRWTk15XC84bHFcL1hnTmtkWW5tWktyME9IVW0yK3duRFhBZ21cLzlRMEZkdjhkbDZxNVRud3FpOU9id3h3aE1JZUtaWWpPK3FySmVGQjcwMytSMGw5TjZFbXpoOUdOXC9xYWt3cHZ0VjgzQVkxNVhONW1uZTM1VUNwdDhkR01vdUFNUE55Q0tGK1lKNTVcL3ZQeEVQekUzNFVEbGptdVBMN3VJWmZxZnc5UFwvQjhYOWVKM2Y4UGpcL3hHOVwvcjBLQUdrWUpkYm5PdHJLS2dXd3FqQlBHODhhK0tRaCtjNElxbm9ybGxQYUJLZnBCbzZcL3R3dkdyVHM3bXdkd1Rkc01CUXJTamdxV1VoQjJzSWxsa1lGMjJKbmVPb3RUVUZieXdKS0NjQXJVdzlDU2UxclluSExkUlhkUGFoOXlydHVzdVFrVDFmY25kQytmRkxuMHdMTnBPOHREeUVGVWFLTEdERzNXeEgyT3FWaGRIcFJFUGI4WjNkaUtSSnBcL1VXM29MakRNZFpJbVwvdGdYU2VkZEtxcVBtd1dRVmtMbGE2cVJcL3lNQWlvVU5GanJ3Z09rRkVPTk5MQ215K20rZUFsUml5ZkZTd0x2RE9kSTN2ejhaNjMxclZ2NnRleXlsS0lCUFdFU0hVWjcwTWRId0FcL1VzVEFaRHdNVGxxTk8rUDZPWGhaNHo3OHhTR2d4dHJlakc0YUtqeWlVQ054TUNyOHE5bXQ5eVpcLzBKeE5WSVwvQVJFUGpcL0xmUXUzeHE0M0tRNjlLa09OZDVKclNDMGJUaWtCS3Q4azlZbEJDQVR3MW9CV3pGZWtmbE1JV0dwTTh5ZHRTVnhjQ3VVckNyamxJMzA1Y0Q1SjZ4a0FjdHZmeERidVFLV0thcTZ1MHV6M1NNVmNsZUdDNFYwbm1SblRKN1RvRE1vc21nNUI2SzhzN3NPdkhEVlRkY1BxM3lcL2IrcXJLQ01sb3htd2xLbWF0MTVYVCs2M2J1K0NhUjYzeVlyazJERXF1MHg0Y0F3SDZYRmpJZjZjK3RmMlArbTFnR1Fkbm5EemtTTTVPSGpoZ1lrNlhsek9hYllsRjJyM3A2ZDBcL1U4aVBUck5rUExEeGRZdWx1aUFob0I4TzBxNFFVNGFNYVlENWwydjNcL3RPMUhMc1NteUt5czI4dlp6R3pLcXUwUmo1NVRBdkhCMHEyUmlPektKbjVTZGR4MHJjOEMza29CRjBXYkVPUzEyMEcydnFWSWlDaDBERFR1OWVDRDdyMDU2ckRJSUZqV2Z3d3RGMDlFalcyQkgxNm5YUU5zajFRMTlQMzNtZWJmNEd1S01vdVJPa0tGK2VzbEJOd2hRVjVcL1wvajE5NXdSaWdYRVJvUTlaRTNcL1FHcmUzMWdTbHgxMWxYU1ZBRjlYemJBRUJPdVZIYWxSOVppXC90eXYyV0M0MWE4U2R3bUdTcDZtTXYzNnFPWU9jbHlydTVLNjRCMHhGSkNcL0hJdlhCOSt5OXFvXC9XMERueXlKVGxlMDlqUmlPZzA4Z0tHNkxoTm1pblZzRXdubjBtMDlhQnE0V2lQYzlYbTN6Q0U4MmZQRXJDWkV1TENiU1RoZTZvWkxiMkkxejIwU0NGdnlLVlk5d1J0ZmJBQWVFQllIWlFzXC80cldNdFZzSHFWalIyY21cL3NPV1wvakpnYjAydXc3amN3PT0iLCJtYWMiOiIwNzIzZDE2OWI3ODk3MzY1OGI0NjQyNjRhYWMxMTZmYjBhMTcyNzlhNDg1NTEzN2EzNDEwM2Q1MjFiMWQ4NjY2In0=';
      this.update();
      this.move();
      this.dongtai();
    },
    // 用于更新一些数据
    async update() {
      this.loading = true;
      const res = await this.$http.post('/task/list', {
        page:this.page,
        page_size:10,
        task_state:0
      });
      if (res.code > 0) {
     
        this.loading=false;
        this.list = [...this.list,...res.data];
      }else{
        this.finished = true;
   
      }

    },
    //动态列表
    async dongtai() {
      const res = await this.$http.post('/task/move/list', {
        page:this.page,
        page_size:3,
        task_state:0
      });
      if (res.code >= 0) {

       
        this.moveList = res.data
      }
    },
    async move() {
    
    },
    async onLoad() {
      this.page = ++this.page;
      this.update();
    },
    // dateDiff(hisTime, nowTime) {
    //   var now = nowTime ? nowTime : new Date().getTime(),
    //     diffValue = now - hisTime,
    //     result = '',
    //     minute = 1000 * 60,
    //     hour = minute * 60,
    //     day = hour * 24,
    //     halfamonth = day * 15,
    //     month = day * 30,
    //     year = month * 12,

    //     _year = diffValue / year,
    //     _month = diffValue / month,
    //     _week = diffValue / (7 * day),
    //     _day = diffValue / day,
    //     _hour = diffValue / hour,
    //     _min = diffValue / minute;

    //   if (_year >= 1) result = parseInt(_year) + "年前";
    //   else if (_month >= 1) result = parseInt(_month) + "个月前";
    //   else if (_week >= 1) result = parseInt(_week) + "周前";
    //   else if (_day >= 1) result = parseInt(_day) + "天前";
    //   else if (_hour >= 1) result = parseInt(_hour) + "个小时前";
    //   else if (_min >= 1) result = parseInt(_min) + "分钟前";
    //   else result = "刚刚";
    //   return result;

    // }
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
