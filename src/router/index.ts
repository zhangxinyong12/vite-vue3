import { createRouter, createWebHistory } from 'vue-router'

// 路由信息
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => /* Home */ import('@/views/home')
  }
]

// 导出路由
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
