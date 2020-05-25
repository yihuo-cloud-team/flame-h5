import Vue from 'vue'
import area from './lib/area'
Vue.filter('arrToStr', function (value) {
    if (!value) return '';
    return value.join(',');
})
Vue.filter('tofixed', function (value) {
    if (!value) return 0;
    return (value * 1).toFixed(2);
})
Vue.filter('arrToStr', function (value) {
    if (!value) return '';
    return value.join(',');
})

Vue.filter('areaToStr', function (value) {
    console.log(value)
    if (!value) return '';
    let areaStr = '';
    try {

        if (typeof area.province_list[value] != 'undefined') {

            areaStr = area.province_list[value];
        }
        if (typeof area.city_list[value] != 'undefined') {
            areaStr = area.city_list[value];
        }
        if (typeof area.county_list[value] != 'undefined') {
            areaStr = area.county_list[value];
        }
    } catch (error) {
        console.warn(`区号[${value}]不存在`);
    }
    return areaStr;
})


Vue.filter('timeToRe', function (v) {
    function pastTime(v) {
        //var createTime = _createTime.substr(0, _createTime.lastIndexOf(" ")) //不能包含毫秒，如果有毫秒，进行截取

        var nowTime = Date.parse(new Date()) / 1000;
        let dateTimeStamp = new Date(v.replace(/-/g, "/")).getTime() / 1000;
        var result = ((nowTime - dateTimeStamp) / 60).toFixed(0); //分钟数

        if (result < 0) {
            result = Math.abs(720 + result);
        }
        var resultStr = result + "分钟前";
        if (result == 0) {
            resultStr = "刚刚"
        }
        //如需显示“月”，“年” 在此处添加if...else
        if (result >= 10080) {
            return v;
        } else if (result >= 1440) {

            result = parseInt(result / 60 / 24); //天

            resultStr = result + "天前"
        } else if (result >= 60) {
            result = parseInt(result / 60); //小时
            resultStr = result + "小时前"
        }
        return resultStr;
    }

    function formatDate(time) {
        var now = new Date(time * 1000)
        var year = now.getFullYear();
        var month = now.getMonth() + 1;
        var date = now.getDate();
        var hour = now.getHours();
        var minute = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
        var second = now.getSeconds();
        return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
    }

    return pastTime(v);




})


Vue.filter('money', function (v) {
    return (v.toFixed(2) + '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
})