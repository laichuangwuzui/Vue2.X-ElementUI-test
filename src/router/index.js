import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/pages/Login'
// import Menue from '@/pages/Menue'
Vue.use(Router)
// const login = r => require.ensure([], () => r(require('@/pages/Login')), 'Login');
const login = () => import('../pages/Login');//声明异步组件的方式
const menue = () => import('../pages/Menue');
const dormitory = () =>import('../pages/Dormitory');
const smartDor = () => import('../pages/SmartDor')
const about = () => import('../pages/About')
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: login,
    },
    {
      path: '/Menue',
      name: 'Menue',
      component: menue,// 首页
      children: [
        {
          path: '/Dormitory',
          name: 'Dormitory',
          component: dormitory
        },
        {
          path: '/SmartDor',
          name: 'SmartDor',
          component: smartDor
        },
        {
          path: '/About',
          name: 'About',
          component: about
        },
        {
          path: '/',
          name: 'SmartDor',
          component: smartDor
        },
      ]
    }
  ]
})
