import routerCategory from '@/views/category/router/routePath.ts';

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
  {divider: true},
  {
    title: 'category.category',
    icon: 'mdi-folder',
    subCaption:'category.categoryExplanation',
    to: routerCategory.CATEGORY,
    children: [
      {
        title: 'category.listCategory',
        to: routerCategory.LIST,
        icon: 'mdi-view-list'
      }
    ]
  },
  // {
  //   title: 'Color',
  //   icon: 'mdi-palette',
  //   to: '/colors',
  //   children: [
  //     {
  //       title: 'Primary',
  //       to: '/colors/primary',
  //       icon: 'mdi-palette-swatch'
  //     },
  //     {
  //       title: 'Secondary',
  //       to: '/colors/secondary',
  //       icon: 'mdi-palette-swatch'
  //     }
  //   ]
  // },
  // {
  //   title: 'Shadow',
  //   icon: 'mdi-box-shadow',
  //   to: '/shadow'
  // },
  // {
  //   title: 'Ant Icons',
  //   icon: 'mdi-crown',
  //   to: '/icon/ant'
  // },
  // {divider: true},
  // {
  //   title: 'Sample Page',
  //   icon: 'mdi-web',
  //   to: '/sample-page'
  // },
  // {
  //   title: 'Documentation',
  //   icon: 'mdi-help-circle',
  //   to: 'https://codedthemes.gitbook.io/mantis-vuetify/',
  //   type: 'external',
  //   chip: 'gitbook',
  //   chipColor: 'secondary',
  //   chipVariant: 'flat'
  // }
];

export default sidebarItem;