import routerName from '@/views/dashboard/router/routerName.ts';
import routerPath from '@/views/dashboard/router/routerPath.ts';
import ComingSoon from '@/views/pages/maintenance/comingsoon/ComingSoon.vue';

const routerDashboard = [
  {
    name: routerName.DASHBOARD,
    path: routerPath.DASHBOARD,
    component: ComingSoon
  }
];
export default routerDashboard;
