import { createFilledArray } from 'src/shared/helpers/scripts/arrays';

import type { List } from '../types';

const getListStub = (name: string, count: number = 100): List => {
  return createFilledArray(count, (_, index) => ({
    name: `${name} ${index + 1}`,
    id: (index + 1).toString(),
  }));
};

export { getListStub };
