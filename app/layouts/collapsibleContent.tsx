import { Grid, House, Settings } from 'lucide-react';

const primaryNavigation = [
  {
    title: 'Dashboard',
    url: '/',
    icon: House,
    items: [
      {
        title: 'Patients List',
        url: '/patients-list',
        icon: Grid,
      },
    ],
  },
];

const secondaryNavigation = [
  {
    title: 'Settings',
    icon: Settings,
  },
];

export { primaryNavigation, secondaryNavigation };
