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
      component: () => import('./views/Home.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('./views/Test.vue')
    },
    {
      path: '*',
      name: '404',
      component: () => import('./views/404.vue')
    }
  ]
})

// TO-DO , 加入路由守卫
// router.beforeEach(()=>{
//   console.log('路由守卫过滤')
//   next()
// })

export default router