import type { State } from '../types';

const initialState: State = {
  status: 'none',
  error: null,
  trelloData: {
    archivedLists: [],
    createdLists: [],
  },
  boardToSheetConvertResponse: null,
  fromFileType: 'default',
  toFileType: 'default',
};

export { initialState };
