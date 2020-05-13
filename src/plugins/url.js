import Vue from 'vue';

let Url = {
  // serverUrl: 'https://api.flame.yihuo-cloud.cn/h5',//测试环境   
  // serverUrl: 'https://api.flame.yihuo-cloud.com/h5',//生产环境
  // serverUrl: 'http://192.168.0.115:9002/h5',//李子龙 
  serverUrl: 'http://192.168.0.100:12193/h5',//李传浩的本地
  // serverUrl: 'http://192.168.0.122:82/admin',//吴杰
  // uploadUrl: '',
  uploadUrl: 'https://api.yihuo-cloud.com',
  // imageUrl: '',
  imageUrl: 'https://api.yihuo-cloud.com',
}

Vue.prototype.$Url = Url;

export default Url;


