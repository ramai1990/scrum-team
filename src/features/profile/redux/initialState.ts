import { State } from '../types';

const initialState: State = {
  avatarURL: '',
  fullName: '',
  description: '',
  boardIDs: [],
  status: 'idle',
  error: null,
};

export { initialState };
