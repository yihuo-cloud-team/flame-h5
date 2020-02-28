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
      localStorage.jwt = 'eyJpdiI6IkNpMjJDSVRyUllQZWlNQ3B5RmV1VVE9PSIsInZhbHVlIjoiUm5NRXlzWEJWSG1oOHl3eG5Wd0IwdHl2dmtjS1U2Yk1rR3hUODV3dlhvWHpRREtWam5SdkRVNUxmbHdKN0ZsT2N1eW9KQmZvb1VMNVZabmZvTEN3eHVFRDBHTGdGTWNwd0greUNrSml1MUFrMlwvcytGa2lOeWgzOVpxQlB4eXZ6M2NMRmtIQlMwYm5teTY0UjB0bTExa3plalp5NUlBdXZuWElVTURZOFRzbFhIK1NPMGRkRWhiS3NSakc1aVAwNmVRYlgyRzB5Mk1nMFFWQjlLXC9MSFZaNlRBZnFhUGRSTEVVak1OQ2J5ZytWTERIRVo4bkRzb01iZWY4ekRpSG5KRitNYlN0MkNKXC80UUZaMXI1R1N3Q0Q3VGREQ2ROd2hsNVRsTkE1TFVJeG9EbVNLN002dkRzdXFUMEJ0VHZIUUVYTTduZlBJNzRBeEdyZCtPMzVZTWIrOThyTHBscmdjaUN1amJqTWtOSzIzb2E5cFNQT2dhWnlkSVh0VXJIR2xEMisxcUxyRmF5TE9rYlwvS0QwZEdqMXhYTTBibVN3YXJYU3c2TVBHTzE1T3UwSVpXdmRjc1lwMzZoRklialhVeGlcLzd5STkxZU5PcVFzR0tEUjFYakFza2dYaXdyY3RORkNmYmpYU1lvNW1aUmd5OXhPekZtZjZ3RnZpUHp4Y2VqNFMrbEtsZ1JxK1VCNGZUQTFVaVNUWmRHdXMyZ0xFa0xoYk9nSDFoMzNJRnNvb3BMdGNRM2had2RuM3pPeHdtMzQxWlUwR3lURjRsXC9jYXExK3U1MFBMMTF4a1NGVkRlUDZ5ak9kV1BrZDdKU0lKN2ZFUEVJYllXUFRnVm1weWRwXC92bEhQYjl3YlgzVUpvd01CMDJlU2FLZFdQblQ4Y3U3bFcyTFBEMHdjUEdMZHpSaGkwVTFHek1HNTJ1VU5uYVpnYmV6WUtZSDM3MXgxcUtyRDNqZ3FrWk9XWDhUS2Y1MGxNQ05BNTZhbFdQQUVXWkI4b0c1akNZMVZyM1BPSGVoQ1owMXZxazhNWkpmUStiWTNLZit5djdSZWJNZVp1MGd5VjV1M3lsNEgwVnhacUNTWXlMUzVoNUp5dGVwY1B5dzJxV0JEbVJpVUNjN0FRWmdQYysxenFQYmxOeElWaHBSOEk3blJjQ3dpNEJwMjhHUzlKQ2U4dkZmbEtPSWV6MWg5RnR6bjQxaFJwaWVtQzNwaFBLRmtjdE8yUHAwYzU2YnM2cTB4MzhCUHZrUVhHWXVQQUtHTFMzTWRuYzFVcjd6Y1JwRVFsKzA0bE8zQ2M0UTZKVjZBMzlnMStjZFhHNXVwdzZwY3VWbEtBTlEzTDZTaDdycmd0aWVWQk4rd2xiMkxrWThVVE1CeGN6czRld0l0T3M4ZVN1WmdESktMXC9WaFVIVW9DTTEwbGw2V0hUTENUbUt4WE54dUNncFwvWXdvdmIrOHI5OHFmY2tJUUQzWXJoMkpVaWp6Z3IyXC85TGJoRXJ2bHFuaG9sMnZjNWhFQVdsVWxZWFBHOUpkUTR5Q2hHYXlwRnUwOHpPMnZRd2N5MSszRUdIVlwveE9xVUpMVVIwODg1dk5LUis3cElEYzI0cVYwWDNoSFFHV2ZoRFVkRlh3XC9JVGJyN0lGODA4YjBBMFd6V0V6Q2pSajg4S0cwVU1kS1NydGdwRGNBS0lVTlwvUmJHVVd0RDdGMElVd3k3Ulh0aW9nZnZvUjVDUWhtTzhiK3lTTFwvT1lhODhzNE9DOXpPQkpFVnZtdGhWRjJWOVlnQ21CRmRQK255TFNwK2liejV4em56K1NQMVNBeDgrdjI2Qm9hTUl1T2xNWEIyR3VzYWZORjNpM2Y0SzZKS0ozK2N5ZHhuY3BFUzRxcFM2TFRRSlB5czZINFhCQUdsYzNkMVMxNjNWZnArelFSazlYWk5GODIxejd4MURjRT0iLCJtYWMiOiJmZTE5NDZkZjZjMzhhMDQ1ZmFiMjE0OTEzOWNlYmRiZDg4NzJkMGY4ZDU5ODQ5NjVkYjQ3ZGU2NmEzZDI2MGIxIn0=';
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
