import layout from '@/layouts/default.vue';
import routerDashboard from '@/views/dashboard/router/routerDashboard.ts';
import routerCategory from '@/views/category/router/routerCategory.ts';
import routerPhones from '@/views/phones/router/routePhone.ts';

const routers = [
  {
    path: '/',
    component: layout,
    children: [
      {
        name: 'LandingPage',
        path: '/',
        component: () => import('@/views/dashboard/DefaultDashboard.vue')
      },
      ...routerDashboard,
      ...routerCategory,
      ...routerPhones
    ]
  }
];
export default routers;
