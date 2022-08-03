import { Person } from 'src/shared/api/google/people';

import { State } from '../types';

const getEmailFromEmailAddresses = (
  defaults: State['email'],
  emailAddresses?: Person['emailAddresses']
): State['email'] => {
  if (emailAddresses === undefined) return defaults;

  const [emailAddress] = emailAddresses.filter(({ value }) => Boolean(value));

  const { value = defaults } = emailAddress;

  return value;
};

export { getEmailFromEmailAddresses };
