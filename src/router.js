import Vue from 'vue'
import Router from 'vue-router'
import Weixin from './components/Weixin.vue'
import Login from './components/login.vue'
import list from './components/weixin/MailList/MyilListBody.vue'

import user from './components/message/chat/chat-user.vue'
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
      path: '/list',
      component: list
    },
    {
      path: '/user',
      component: user
    },

  ]
})