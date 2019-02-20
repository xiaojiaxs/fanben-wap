// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//注册全局组件
import navbar from '@/components/common/navbar'
import tabbar from '@/components/common/tabbar'
const loadComponent = {
  install(Vue) {
    Vue.component("navbar", navbar)
    Vue.component("tabbar", tabbar)
  }
}
Vue.use(loadComponent)

//图片缩略
import VuePreview from 'vue2-preview'
Vue.use(VuePreview)

//挂载一个全局网络请求对象
//this.request
import request from '@/request/request'
Vue.prototype.request = request

//定义过滤器
Vue.filter('deleteZero', function (value) {
  value = value / 100
  return value
})


//引入jquery
import $ from 'jquery'

//引入store
import store from '@/store/store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
