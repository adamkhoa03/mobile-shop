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
        icon: 'mdi-laptop',
        disabled: true
      },
      {
        title: 'category.accessory',
        to: '/accessory',
        icon: 'mdi-headphones',
        disabled: true
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
        icon: 'mdi-shield-check',
        disabled: true
      },
      {
        title: 'phones.inventoryList',
        to: '/phones/inventory',
        icon: 'mdi-store',
        disabled: true
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
        icon: 'mdi-view-list',
        disabled: true
      },
      {
        title: 'computer.warrantyList',
        to: '/computer/wrrantyList',
        icon: 'mdi-shield-check',
        disabled: true
      },
      {
        title: 'computer.inventoryList',
        to: '/inventory',
        icon: 'mdi-store',
        disabled: true
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
        icon: 'mdi-view-list',
        disabled: true
      },
      {
        title: 'accessory.warrantyList',
        to: '/accessory/warrantyList',
        icon: 'mdi-shield-check',
        disabled: true
      },
      {
        title: 'accessory.inventoryList',
        to: '/accessory/inventoryList',
        icon: 'mdi-store',
        disabled: true
      }
    ]
  },
  { divider: true },
  {
    title: 'promotion.name',
    icon: 'mdi-sale',
    subCaption: 'promotion.explanation',
    to: '/promotion',
    disabled: true
  },
  { divider: true },
  {
    title: 'loyal.name',
    icon: 'mdi-crown',
    subCaption: 'loyal.explanation',
    to: '/loyal',
    disabled: true
  },
  { divider: true },
  {
    title: 'revenue.name',
    icon: 'mdi-cash',
    subCaption: 'revenue.explanation',
    to: '/revenue',
    disabled: true
  }
];

export default sidebarItem;
