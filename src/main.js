// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//先命令cnpm install vue-router --save-dev,再引入路由配置
import VueRouter from 'vue-router'
//先命令cnpm install vue-resource --save-dev,再引入配置实现http请求
import VueResource from "vue-resource"
import App from './App.vue'
import Home from './components/Home.vue'
import User from './components/User.vue'


Vue.config.productionTip = false;
//使用路由
Vue.use(VueRouter);
//使用http请求
Vue.use(VueResource);

//配置路由
const router=new VueRouter({
  routes:[
    {path:"/",component:Home},
    {path:"/user",component:User}
  ]
});

//全局注册组件
//Vue.component("user",User);

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
});
