import { createSlice } from '@reduxjs/toolkit';

import { initialState } from './initialState';
import { getProfileDetails } from './thunks/getProfileDetails';

const slice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    statusReset: (state) => {
      state.status = 'idle';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProfileDetails.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getProfileDetails.fulfilled, (state, action) => {
        const { avatarUrl, bio, fullName, idBoards } = action.payload;

        state.status = 'fulfilled';
        state.avatarURL = avatarUrl ?? '';
        state.description = bio ?? '';
        state.fullName = fullName ?? '';
        state.boardIDs = idBoards ?? [];
      })
      .addCase(getProfileDetails.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message ?? '';
      });
  },
});

const { reducer } = slice;

const { statusReset } = slice.actions;

export { reducer, statusReset };
