import { routes as boardCreationRoutes } from './BoardCreation/constants';
import { routes as myBoardsRoutes } from './MyBoards/constants';

const routes = {
  self: '/trello',
  boardCreation: boardCreationRoutes,
  myBoards: myBoardsRoutes,
};

const sideBarItems = [
  { key: 'Profile', children: 'Profile', href: routes.self, isRoot: true },
  {
    key: 'My boards',
    children: 'My boards',
    href: routes.myBoards.self,
  },
  {
    key: 'Create board',
    children: 'Create board',
    href: routes.boardCreation.self,
  },
];

export { routes, sideBarItems };
