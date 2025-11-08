import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/auth',
    },
    {
      path: '/auth',
      name: 'AuthForm',
      component: () => import('@/views/auth/AuthForm.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      redirect: '/auth',
    },
    {
      path: '/register',
      name: 'Register',
      redirect: '/auth',
    },
    {
      path: '/home',
      name: 'Home',
      component: HomeView,
    },
  ],
})

export default router
