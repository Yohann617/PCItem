import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

const home = r => require.ensure([], () => r(require('../page/home/home.vue')), 'home') // 按需加载组件
const detail = r => require.ensure([], () => r(require('../page/detail/detail.vue')), 'detail')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    }
  ]
})
