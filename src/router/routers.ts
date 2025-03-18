import layout from '@/layouts/default.vue';
import routerDashboard from '@/views/dashboard/router/routerDashboard.ts';
import routerCategory from '@/views/category/router/routerCategory.ts';
import routerPhones from '@/views/phones/router/routePhone.ts';

const routers = [
  {
    path: '/',
    meta: {
      requiresAuth: true
    },
    component: layout,
    children: [
      {
        name: 'dashboard',
        path: '/',
        component: () => import('@/views/pages/maintenance/comingsoon/ComingSoon.vue')
      },
      {
        name: 'commingSoon',
        path: '/comming-soon',
        component: import('@/views/pages/maintenance/comingsoon/ComingSoon.vue')
      },
      ...routerDashboard,
      ...routerCategory,
      ...routerPhones
    ]
  }
];
export default routers;
