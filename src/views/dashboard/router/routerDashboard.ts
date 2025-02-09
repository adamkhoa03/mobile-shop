import routerName from '@/views/dashboard/router/routerName.ts';
import routerPath from '@/views/dashboard/router/routerPath.ts';
import dashBoard from '@/views/dashboard/DefaultDashboard.vue';

const routerDashboard = [
  {
    name: routerName.DASHBOARD,
    path: routerPath.DASHBOARD,
    component: dashBoard
  }
];
export default routerDashboard;
