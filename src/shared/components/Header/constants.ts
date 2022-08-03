import { NavigationItem } from './types';

const defaultNavigationItems: NavigationItem[] = [
  { key: 'Home', href: '/mock', children: 'Home', isCurrentPage: true },
  { key: 'Trello', href: '/mock', children: 'Trello' },
  { key: 'Google', href: '/mock', children: 'Google' },
];

export { defaultNavigationItems };
