// 在手机端,h5和app中的组件引入方式可能不太一样(import 或 require)
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// import Home from './views/Home.vue'
// import About from './views/About.vue'

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { auth: false },
      component: () => import('./views/Home.vue')
    },
    {
      path: '/test',
      name: 'test',
      meta: { auth: false },
      component: () => import('./views/Test.vue')
    },
    {
      path: '*',
      name: '404',
      meta: { auth: false },
      component: () => import('./views/404.vue')
    }
  ]
})

// 加入路由守卫
router.beforeEach((to, from, next) => {
  // 如果页面登录不敏感或者用户已经登录,那么导向目标页,否则导向首页
  let isLogin = Vue.localStorage.get('isLogin', false, Boolean) // 获取登录状态并默认为false
  console.log(isLogin, '路由守卫')
  if (to.meta.auth === false || isLogin) {
    next()
  } else {
    next('/')
  }
})

export default router