import {
  discoveryDocs as sheetsDiscoveryDocs,
  scopes as sheetsScopes,
} from './sheets/constants';
import {
  discoveryDocs as driveDiscoveryDocs,
  scopes as driveScopes,
} from './drive/constants';
import {
  discoveryDocs as peopleDiscoveryDocs,
  scopes as peopleScopes,
} from './people/constants';

const discoveryDocs = {
  sheetsDiscoveryDocs,
  driveDiscoveryDocs,
  peopleDiscoveryDocs,
};
const scopes = { driveScopes, peopleScopes, sheetsScopes };

export { discoveryDocs, scopes };
