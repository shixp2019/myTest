// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store1'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import directives from './directives'
import VueI18n from 'vue-i18n'
const echarts = require('echarts')
// import CaiNiaoDemo from './components/CaiNiaoDemo'

Vue.config.productionTip = false
// Vue.config.devtools = true
Vue.use(ElementUI)
Vue.use(VueI18n)
Vue.prototype.$echarts = echarts
// Vue.directive('focus', {
//   inserted: function (el) {
//     el.focus()
//   }
// })
router.beforeEach((to, from, next) => {
  // console.log('beforeEach')
  next()
})
router.afterEach((to, from) => {
  // console.log('afterEach')
})
router.beforeResolve((to, from, next) => {
  // console.log('beforeResolve')
  next()
})
let messages = {
  zh: {
    message: {
      hello: '活动名称'
    }
  },
  en: {
    message: {
      hello: 'activityName'
    }
  }
}
const i18n = new VueI18n({
  locale: 'zh',
  messages
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  // components: { App },
  // template: '<App/>',
  render: h => h(App),
  directives: directives
})
