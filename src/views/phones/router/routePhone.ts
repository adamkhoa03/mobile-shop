import routerPath from '@/views/phones/router/routePath.ts';
import routerName from '@/views/phones/router/routeName.ts';
import listPhone from '@/views/phones/list/listPhone.vue';

const routerPhones = [
  {
    name: routerName.LIST,
    path: routerPath.LIST,
    component: listPhone
  }
];

export default routerPhones;
