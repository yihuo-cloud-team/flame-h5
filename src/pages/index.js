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
      localStorage.jwt = 'eyJpdiI6IldaVGpiYXY1cFI2ejRPNkM1Um1rOUE9PSIsInZhbHVlIjoiWGp4MkZhQ05HaXFDN21wN0l1K1BkWU9JdGx4TlYrSFBIM1ZYWXA5NnBvTXRXRTlTb3JvVFN2b1BEMXZId01GUDVPYTI2d3JFU2Q1VGpjRUl3ZWU4TmtHRFhCbTc2NmpPN2FYZDUyMWF5ZWt1ZTAyOGFwS1huMVpnZDFaS2s3WmtPMnhJSmszZ3c4UVdXMUQ2aFBKTWZKVjVCcFdaMXg1b0lYZU5cLyt5ZUVHVSt0NEhoK0ZlWTVzZG9tRWtUMlI1UWxCZnVqQytGclh2ckxJeEhlMFlnRUJWMURMQmJRVWJkc09WWkdsYkxMN0Nrdkw3K3dzNHBSRDN1ZHVLeU8wRmdxa2VEYVwvQ05hT1FIVFN5aG1seE9weGI4cXRkTzREQWdoRTlYRE9GTVprWFM0TTlNYU95bTdrZlFZMUVIWHBvZE9EQzRtQkdZMmlITHhyTk1BTlFVdFV1SVU2cVwvQXZ2Q3hEN0JROG5MTjZwZ2ZrQWNsUW9qSWVvcjZxNnVWVGhsQ01yemp1T3NRams3S3FLS0pHUXE5Q0R6dCtvY3BqMm9zd2xjclpvVk1WQ3hqczZXVHdPOGFjcDFoaitIanp0Z2NqVG83UU9LUGxXQXhcL2lDdEMxa2h0akJVanI0bEZEU2F6eGRQRGJOcGtXdjc2amdlcnJsdjM4WTVuMlJMUkR3WStDSHhFNnZzaG42dG5taElxeFNITzV6M2tzclZ0eHpDMXZ5cjhsWFF5QU1RYmZKVVQ0SW9yYWl3SW5pU2VQblwvVm8wN0p5aW9wT2xWUHdwTU9pTTdcLzBUUEt2ZnFkRVdlUk1cL0UwUTJ0NnIwUHBCRVlOaVwveEE3TkNSOHJHZnF6T1dZc1dsUGVXTzVneUVWYW1qandhbUdPKzFYMld4TXpFdVdiK2laaHNyWnNuVXZlSmJ0MFg4QStVNEJFam5sU05qamZ5emRQTlY3VE1VWU9SQ01BbGpDc2tkVEFoemFIRGtpQ3puR0tMZ2V3QWhrRjNKUkVMWFd3U2RIR0VcLzRxTFwvcG1tYlBhTEptRkhONFVpdTlBTmZodzd3ZnpnMmFjaXpCS004TDRwVkpoOTJPRmI0QW5RRk1rOURzUzZCSmVJeUtMMGhzUzM1eTZabmR4NDBhdE5sdkp4cHZ4K0RsZUJoSEFqNG9tRDNzSVwvakxmWFJya0hkUTBneUNnbk5Pa1lyYjVjSUxYeFJLMDR6c3ZZcDFxQUphZkpuTHo5aHBlYTVvNmRrcFwvU0xnR1p1ZjFIZllvdU1FN3pwd3V2R3Njalg1dnJLSkdUemhhTUk1eWZwV3pKdWpLcmJUWVlRTWpLbzlST2hKRityWGl0TEJvZEk2U1VGV1V6SFVYQkNVRnM4eFVqaG9LcFhkZDgwWWxTa0crdmtrcWdFbTM2MWxRZW8rODZVTHkzS0N5OTQzMjkzaDdiYjFhRGVcLzhFT3NDTHhZVTdQR0xFSGorNlN5TkRXcXRYa1JTWlRIRzYxQUhza2U4NEpKRjdEblFQU0FYSFd0bUxFaStYN2QrczROdkJyY1h4M0RYWUhleVloWVoyMlNxXC85b3RQR1VFOFwvdGpSejB6NExEMXRsNjBydnpLcVUwdlFkVXFMc202cHlZcVRaXC9FSjEwc0FzSkUyXC94ZVwvcVBBVEhKT2hWc1lyeDhZbWZmK0JjU0R6d1NVTDNtTHBFNzErVUlwbzJwMGJ6RVwvWlprZ3hlUFVuWjBYTk81cDM3SWYzVFZnUzNhNEJcL1grYXUyZTFXZkVpVHdvd3FhV1I3RW9qYzFwNnFUYW44Mk1nTW9hYVh4b3htTTJiTVd1K2NOQzBCeVlaZUQyN2dmQVg2djhJcHZWcVBWb2h0OVhIRVA5VVVaNFp4WW83VGVWRzI5NkN5ajZRcHZwWTVNRk85cWl1QT09IiwibWFjIjoiZjMwYzM2YzdhZTJmMTljOWVjZGNjNDE3Njk4NTI1ODIyZGJiMWViNzQzZGYxZjRhYTYxYTk3NWQ0ZDRmN2U1NSJ9';
      this.update();
      this.move();
      this.dongtai();
    },
    // 用于更新一些数据
    async update() {
      this.loading = true;
      const res = await this.$http.post('/task/list', {
        page:this.page,
        page_size:10
      });
      if (res.code > 0) {
        res.data.map((el) => {
          el.add_time = this.dateDiff(el.add_time * 1000);
        })
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
        page_size:3
      });
      if (res.code >= 0) {

        res.data.map((el) => {
          el.add_time = this.dateDiff(el.add_time * 1000);
        })
        this.moveList = res.data
      }
    },
    async move() {
    
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
