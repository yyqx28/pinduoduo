// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'swiper/dist/css/swiper.css'
import  './assets/css/iconfont.css';
import  './assets/js/jquery-1.8.3'
import router from './router'//导入到根vm中
import App from './App'

// Vue.config.productionTip = false
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,//注册到viewmode中
  render(h){
    return h(App);
  }
})
