import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import CaiNiaoDemo from '../components/CaiNiaoDemo'
import CaiNiaoDemoCss from '../components/CaiNiaoDemoCss'
import ElementUIDemo from '../components/ElementUIDemo'
import NavDemo from '../components/NavDemo'
import Vuex from '../components/Vuex'
Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'html',
      path: '/html/:id/:name',
      component: CaiNiaoDemo,
      beforeEnter: (to, from, next) => {
        // console.log('beforeEnter')
        next()
      }
    },
    {
      name: 'css',
      path: '/css',
      component: CaiNiaoDemoCss
    },
    {
      name: 'search',
      path: '/search/:value',
      // component: resolve => require(['../components/SearchDemo'], resolve)
      component: () => import('../components/SearchDemo'),
      scrollBehavior: () => ({ x: 0, y: 0 })
    },
    {
      name: 'elementUI',
      path: '/elementUI',
      component: ElementUIDemo
    },
    {
      name: 'nav',
      path: '/nav',
      component: NavDemo
    },
    {
      name: 'vuex',
      path: '/vuex',
      component: Vuex
    },
    {
      name: 'echarts',
      path: '/echarts',
      component: () => import('../echarts/first')
    }
  ]
})
