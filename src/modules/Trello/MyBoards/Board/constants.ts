import { routes as myCardRoutes } from './MyCard/constants';

const routes = {
  self: `/trello/my-boards/[boardID]`,
  myCard: myCardRoutes,
};

export { routes };
