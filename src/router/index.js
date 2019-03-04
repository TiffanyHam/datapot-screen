import Vue from 'vue'
import Router from 'vue-router'
import screenIndex from '@/screenIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'screenIndex',
      component: screenIndex
    },
    {
      path: '/leftTop',
      name:'leftTop',
      component: resolve => require(['../components/left/leftTop.vue'], resolve)
    },{
      path: '/leftMiddle',
      name:'leftMiddle',
      component: resolve => require(['../components/left/leftMiddle.vue'], resolve)
    },
    {
      path: '/leftBottom',
      name:'leftBottom',
      component: resolve => require(['../components/left/leftBottom.vue'], resolve)
    },
    {
      path: '/centerTop',
      name:'centerTop',
      component: resolve => require(['../components/center/centerTop.vue'], resolve)
    },{
      path: '/centerLeft',
      name:'centerLeft',
      component: resolve => require(['../components/center/centerLeft.vue'], resolve)
    },
    {
      path: '/centerRight',
      name:'centerRight',
      component: resolve => require(['../components/center/centerRight.vue'], resolve)
    },
    {
      path: '/rightBottom',
      name:'rightBottom',
      component: resolve => require(['../components/right/rightBottom.vue'], resolve)
    },
    {
      path: '/rightTop',
      name:'rightTop',
      component: resolve => require(['../components/right/rightTop.vue'], resolve)
    },
    {
      path: '/rightMiddle',
      name:'rightMiddle',
      component: resolve => require(['../components/right/rightMiddle.vue'], resolve)
    }
  ]
})
