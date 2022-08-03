import type { State } from '../types';

const initialState: State = {
  items: [],
  displayedItems: 0,
  routeToChosen: null,
  status: 'idle',
  error: null,
};

export { initialState };
