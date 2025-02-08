import layout from '@/layouts/default.vue';

const routers = [
  {
    path: '/',
    component: layout,
    children: [
      {
        name: 'LandingPage',
        path: '/',
        component: () => import('@/views/dashboard/DefaultDashboard.vue')
      }
    ]
  }
];
export default routers;
