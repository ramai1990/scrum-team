import { CODES } from '../constants';

const createColumnTitles = (index: number) => {
  const range = CODES.Z - CODES.A + 1;

  if (index < range) {
    return String.fromCharCode(CODES.A + index);
  }

  const firstCharCode = Math.floor(index / range) - 1;
  const secondCharCode = index % range;
  const firstLetter = String.fromCharCode(CODES.A + firstCharCode);
  const secondLetter = String.fromCharCode(CODES.A + secondCharCode);

  return `${firstLetter}${secondLetter}`;
};

export { createColumnTitles };
