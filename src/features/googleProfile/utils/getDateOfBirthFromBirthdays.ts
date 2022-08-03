import { Person } from 'src/shared/api/google/people';

import { State } from '../types';

const getDateOfBirthFromBirthdays = (
  defaults: State['dateOfBirth'],
  birthdays?: Person['birthdays']
): State['dateOfBirth'] => {
  if (birthdays === undefined) return defaults;

  const [birthday] = birthdays.filter(
    ({ date }) =>
      Boolean(date) &&
      Boolean(date?.day) &&
      Boolean(date?.month) &&
      Boolean(date?.year)
  );

  const { day, month, year } = { ...birthday.date };

  const isValidDate =
    day !== undefined && month !== undefined && year !== undefined;

  if (!isValidDate) return defaults;

  const monthOneToTwelve = month;
  const monthZeroToEleven = monthOneToTwelve - 1;

  const date = new Date(year, monthZeroToEleven, day);

  return date.toLocaleString('ru', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  });
};

export { getDateOfBirthFromBirthdays };
