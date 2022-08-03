import type { State } from '../types';

const initialState: State = {
  status: 'idle',
  error: null,
  files: { items: [], nextPageToken: undefined },
};

export { initialState };
