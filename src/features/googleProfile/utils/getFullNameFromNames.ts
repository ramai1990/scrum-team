import { Person } from 'src/shared/api/google/people';

import { State } from '../types';

const getFullNameFromNames = (
  defaults: State['fullName'],
  names?: Person['names']
): State['fullName'] => {
  if (names === undefined) return defaults;

  const [name] = names.filter(({ displayName }) => Boolean(displayName));

  const { displayName = defaults } = name;

  return displayName;
};

export { getFullNameFromNames };
