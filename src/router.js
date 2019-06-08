import Vue from 'vue'
import Router from 'vue-router'
import Weixin from './components/Weixin.vue'
import Login from './components/login.vue'
import chat from './components/Weixin.vue'
import list1 from './components/weixin/datetime/date.vue'
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
      path: '/login',
      component: Login
    },
    {
      path: '/Weixin/chat/:lid',
      component: chat
    }
    //   path: '/list1',
    //   component: list1
    // }

  ]
})