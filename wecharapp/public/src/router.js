import Vue from 'vue'
import Router from 'vue-router'
import Weixin from './components/Weixin.vue'
import bar from './components/weixin/Tabbar.vue'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/Weixin',
      component: Weixin
    },
    {
      path: '/',
      redirect: "/Weixin"
    },
    {
      path: "/bar",
      component: bar
    }
  ]
})