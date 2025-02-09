import layout from '@/layouts/default.vue';
import routerDashboard from '@/views/dashboard/router/routerDashboard.ts'

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
      ...routerDashboard
    ]
  }
];
export default routers;
