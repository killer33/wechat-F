//引入vue
//引入axios库并且配置
//1:引入Vue
import Vue from 'vue'
//2:引入axios库
import axios from 'axios'
//3:设置跨域请求保存session
axios.defaults.withCredentials = true;
//4:设置请求服务器基础路径
axios.defaults.baseURL = "http://zidan.applinzi.com/"
//5:将axios注册 Vue实例
Vue.prototype.axios = axios;
//7:在minn.js 引入axios即可