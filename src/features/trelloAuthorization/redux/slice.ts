import { createSlice } from '@reduxjs/toolkit';

import { initialState } from './initialState';

const slice = createSlice({
  name: 'trelloAuthorization',
  initialState,
  reducers: {
    authorization: (state, action) => {
      state.token = action.payload;
    },
  },
});

const { reducer } = slice;

const { authorization } = slice.actions;

export { reducer, authorization };
