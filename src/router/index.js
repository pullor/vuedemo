import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Render from '@/components/render'
import wxjssdk from '@/components/jssdk'
import remotejs from '@/components/remotejs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/render',
      name: 'Render',
      component: Render
    },
    {
      path: '/wxjssdk',
      name: 'wxjssdk',
      component: wxjssdk
    },
    {
      path: '/remotejs',
      name: 'remotejs',
      component: remotejs
    }
  ]
})
