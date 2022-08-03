import { Person } from 'src/shared/api/google/people';

import { State } from '../types';

const getPhoneNumberFromPhoneNumbers = (
  defaults: State['phoneNumber'],
  phoneNumbers?: Person['phoneNumbers']
): State['phoneNumber'] => {
  if (phoneNumbers === undefined) return defaults;

  const [phoneNumber] = phoneNumbers.filter(({ value }) => Boolean(value));

  const { value = defaults } = phoneNumber;

  return value;
};

export { getPhoneNumberFromPhoneNumbers };
