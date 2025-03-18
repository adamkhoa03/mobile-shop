const PublicRoutes = {
  meta: {
    requiresAuth: false
  },
  path: '/login',
  name: 'login',
  component: () => import('@/views/authentication/LoginPage.vue')
};

export default PublicRoutes;
