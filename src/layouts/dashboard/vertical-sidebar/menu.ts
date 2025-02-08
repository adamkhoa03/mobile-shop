interface menu {
  enable: boolean;
  role: string;
  icon: string;
  title: string;
  divider: boolean;
  iconType: string;
  group: string;
  href: string;
  isReload: boolean;
  children: menu[];
}

const menuItems: menu[] = [
  {
    enable: true,
    role: 'admin',
    icon: 'mdi-home',
    title: 'Dashboard',
    divider: false,
    iconType: 'mdi',
    group: 'dashboard',
    href: '/',
    isReload: false,
    children: []
  },
  {
    enable: true,
    role: 'user',
    icon: 'mdi-account',
    title: 'Profile',
    iconType: 'mdi',
    group: 'profile',
    divider: false,
    href: '/profile',
    isReload: false,
    children: [
      {
        enable: true,
        role: 'user',
        icon: 'mdi-account-edit',
        title: 'Edit Profile',
        iconType: 'mdi',
        divider: false,
        group: 'profile',
        href: '/profile/edit',
        isReload: false,
        children: []
      }
    ]
  }
];

export default menuItems


