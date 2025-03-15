import routerCategory from '@/views/category/router/routePath.ts';
import routerPhones from '@/views/phones/router/routePath.ts';

interface menu {
  header?: string;
  title?: string;
  icon?: string;
  to?: string;
  divider?: boolean;
  chip?: string;
  chipColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: menu[];
  disabled?: boolean;
  type?: string;
  subCaption?: string;
}

const sidebarItem: menu[] = [
  {
    title: 'dashboard',
    icon: 'mdi-view-dashboard',
    to: '/dashboard'
  },
  // {divider: true},
  // {
  //   title: 'Login',
  //   icon: 'mdi-login',
  //   to: '/login1'
  // },
  // {
  //   title: 'Register',
  //   icon: 'mdi-account-plus',
  //   to: '/register'
  // },
  { divider: true },
  {
    title: 'category.category',
    icon: 'mdi-folder',
    subCaption: 'category.categoryExplanation',
    to: routerCategory.CATEGORY,
    children: [
      {
        title: 'category.phone',
        to: routerCategory.LIST,
        icon: 'mdi-cellphone'
      },
      {
        title: 'category.computer',
        to: '/computer',
        icon: 'mdi-laptop'
      },
      {
        title: 'category.accessory',
        to: '/accessory',
        icon: 'mdi-headphones'
      }
    ]
  },
  { divider: true },
  {
    title: 'phones.name',
    icon: 'mdi-cellphone',
    subCaption: 'phones.explanation',
    to: routerPhones.PHONE,
    children: [
      {
        title: 'phones.deviceList',
        to: routerPhones.LIST,
        icon: 'mdi-view-list'
      },
      {
        title: 'phones.warrantyList',
        to: '/phones/warrantyList',
        icon: 'mdi-shield-check'
      },
      {
        title: 'phones.inventoryList',
        to: '/phones/inventory',
        icon: 'mdi-store'
      }
    ]
  },
  { divider: true },
  {
    title: 'computer.name',
    icon: 'mdi-laptop',
    subCaption: 'computer.explanation',
    to: routerCategory.CATEGORY,
    children: [
      {
        title: 'computer.deviceList',
        to: '/computer/list',
        icon: 'mdi-view-list'
      },
      {
        title: 'computer.warrantyList',
        to: '/computer/wrrantyList',
        icon: 'mdi-shield-check'
      },
      {
        title: 'computer.inventoryList',
        to: '/inventory',
        icon: 'mdi-store'
      }
    ]
  },
  { divider: true },
  {
    title: 'accessory.name',
    icon: 'mdi-laptop',
    subCaption: 'accessory.explanation',
    to: '/accessory',
    children: [
      {
        title: 'accessory.deviceList',
        to: '/accessory/deviceList',
        icon: 'mdi-view-list'
      },
      {
        title: 'accessory.warrantyList',
        to: '/accessory/warrantyList',
        icon: 'mdi-shield-check'
      },
      {
        title: 'accessory.inventoryList',
        to: '/accessory/inventoryList',
        icon: 'mdi-store'
      }
    ]
  },
  { divider: true },
  {
    title: 'promotion.name',
    icon: 'mdi-sale',
    subCaption: 'promotion.explanation',
    to: '/promotion'
  },
  { divider: true },
  {
    title: 'loyal.name',
    icon: 'mdi-crown',
    subCaption: 'loyal.explanation',
    to: '/loyal'
  },
  { divider: true },
  {
    title: 'revenue.name',
    icon: 'mdi-cash',
    subCaption: 'revenue.explanation',
    to: '/revenue'
  }
];

export default sidebarItem;
