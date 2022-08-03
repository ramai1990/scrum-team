import type { State } from '../types';

const initialState: State = {
  boardName: '',
  lists: [],
  cards: [],
  status: 'idle',
  error: null,
};

export { initialState };
