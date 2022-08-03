import {
  scopes as googleScopes,
  discoveryDocs as googleDiscoveryDocs,
} from 'src/shared/api/google';

import { routes as mySheetsRoutes } from './MySheets/constants';

const discoveryDocs = [
  googleDiscoveryDocs.driveDiscoveryDocs.v3,
  googleDiscoveryDocs.peopleDiscoveryDocs.v1,
  googleDiscoveryDocs.sheetsDiscoveryDocs.v4,
];

const scope = [
  googleScopes.peopleScopes.profile,
  googleScopes.peopleScopes.email,
  googleScopes.peopleScopes.userBirthdayRead,
  googleScopes.peopleScopes.userPhoneNumbersRead,
  googleScopes.driveScopes.readonlyMetadata,
  googleScopes.sheetsScopes.spreadsheets,
].join(' ');

const routes = {
  self: '/google',
  mySheets: mySheetsRoutes,
};

const sideBarItems = [
  { key: 'Profile', children: 'Profile', href: routes.self, isRoot: true },
  {
    key: 'My sheets',
    children: 'My sheets',
    href: `${routes.mySheets.self}`,
  },
];

export { discoveryDocs, scope, routes, sideBarItems };
