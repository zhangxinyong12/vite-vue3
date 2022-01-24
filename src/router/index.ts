import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// 路由信息
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Index',
    component: () => /* Home */ import('@/views/home')
  },
  // {
  //   path: '/Home',
  //   name: 'Home',
  //   redirect: '/'
  // },
  {
    path: '/:pathMath(.*)',
    name: 'IndexHome',
    redirect: '/'
  }
]

// 导出路由
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
