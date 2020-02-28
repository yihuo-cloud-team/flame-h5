//显示发布时间的函数
export default class time {
  constructor() {
    this.pastTime = this.pastTime.bind(this);
    this.formatDate = this.formatDate.bind(this);
  }
  pastTime(_createTime) {
    //var createTime = _createTime.substr(0, _createTime.lastIndexOf(" ")) //不能包含毫秒，如果有毫秒，进行截取
    var nowTime = Date.parse(new Date()) / 1000;
    var result = ((nowTime - parseInt(_createTime)) / 60).toFixed(0); //分钟数
    if (result < 0) {
      result = Math.abs(720 + result);
    }
    var resultStr = result + "分钟前";
    if (result == 0) {
      resultStr = "刚刚发布"
    }
    //如需显示“月”，“年” 在此处添加if...else
    if (result >= 10080) {
      resultStr = this.formatDate(_createTime)
    } else if (result >= 1440) {
      result = parseInt(result / 60 * 24); //天
      resultStr = result + "天前"
    } else if (result >= 60) {
      result = parseInt(result / 60); //小时
      resultStr = result + "小时前"
    }
    return resultStr;
  }
  formatDate(time) {
    var now = new Date(time * 1000)
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var date = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
    var second = now.getSeconds();
    return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
  }
}