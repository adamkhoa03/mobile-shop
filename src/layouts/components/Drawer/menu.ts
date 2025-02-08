
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
  { header: 'Navigation' },
  {
    title: 'Dashboard',
    icon: 'mdi-view-dashboard',
    to: '/dashboard'
  },
  { header: 'Authentication' },
  {
    title: 'Login',
    icon: 'mdi-login',
    to: '/login1'
  },
  {
    title: 'Register',
    icon: 'mdi-account-plus',
    to: '/register'
  },
  { header: 'Utilities' },
  {
    title: 'Typography',
    icon: 'mdi-format-text',
    to: '/typography',
    children: [
      {
        title: 'Basic',
        to: '/typography/basic',
        icon: 'mdi-format-font'
      },
      {
        title: 'Advanced',
        to: '/typography/advanced',
        icon: 'mdi-format-text-wrapping-overflow'
      }
    ]
  },
  {
    title: 'Color',
    icon: 'mdi-palette',
    to: '/colors',
    children: [
      {
        title: 'Primary',
        to: '/colors/primary',
        icon: 'mdi-palette-swatch'
      },
      {
        title: 'Secondary',
        to: '/colors/secondary',
        icon: 'mdi-palette-swatch'
      }
    ]
  },
  {
    title: 'Shadow',
    icon: 'mdi-box-shadow',
    to: '/shadow'
  },
  {
    title: 'Ant Icons',
    icon: 'mdi-crown',
    to: '/icon/ant'
  },
  { header: 'Support' },
  {
    title: 'Sample Page',
    icon: 'mdi-web',
    to: '/sample-page'
  },
  {
    title: 'Documentation',
    icon: 'mdi-help-circle',
    to: 'https://codedthemes.gitbook.io/mantis-vuetify/',
    type: 'external',
    chip: 'gitbook',
    chipColor: 'secondary',
    chipVariant: 'flat'
  }
];

export default sidebarItem;