import { createRouter, createWebHistory } from 'vue-router';
import PublicRoutes from './PublicRoutes';
import routers from './routers.ts';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/pages/maintenance/error/Error404Page.vue')
    },
    ...routers,
    PublicRoutes
  ]
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token');
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login');
  } else if (to.name === 'login' && isAuthenticated) {
    next('/dashboard');
  } else {
    next();
  }
});
