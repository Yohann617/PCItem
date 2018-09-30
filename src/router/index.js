import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

const home = r => require.ensure([], () => r(require('../page/home/home.vue')), 'home') // 按需加载组件
const detail = r => require.ensure([], () => r(require('../page/detail/detail.vue')), 'detail')
const personal = r => require.ensure([], () => r(require('../page/personal/personal.vue')), 'personal')
const personalBasicInfo = r => require.ensure([], () => r(require('../page/personal/children/basicInfo.vue')), 'personalBasicInfo')
const personalCoupon = r => require.ensure([], () => r(require('../page/personal/children/coupon.vue')), 'personalCoupon')
const personalOrders = r => require.ensure([], () => r(require('../page/personal/children/orders.vue')), 'personalOrders')
const personalshopCar = r => require.ensure([], () => r(require('../page/personal/children/shopCar.vue')), 'personalshopCar')

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
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal,
      redirect: '/personal/basicInfo',
      children: [{
        path: 'basicInfo',
        component: personalBasicInfo
      },
      {
        path: 'coupon',
        component: personalCoupon
      },
      {
        path: 'orders',
        component: personalOrders
      },
      {
        path: 'shopCar',
        component: personalshopCar
      }]
    }
  ]
})
