import { createSlice } from '@reduxjs/toolkit';

import {
  getDateOfBirthFromBirthdays,
  getEmailFromEmailAddresses,
  getFullNameFromNames,
  getPhoneNumberFromPhoneNumbers,
  getPhotoURLFromPhotos,
} from '../utils';
import { initialState } from './initialState';
import { selectProfile } from './selectors';
import { getInfoAboutMe } from './thunks';

const slice = createSlice({
  name: 'googleProfile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getInfoAboutMe.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getInfoAboutMe.fulfilled, (state, action) => {
        state.status = 'fulfilled';

        const { birthdays, emailAddresses, names, photos, phoneNumbers } =
          action.payload.result;

        state.avatarURL = getPhotoURLFromPhotos(initialState.avatarURL, photos);
        state.fullName = getFullNameFromNames(initialState.fullName, names);
        state.dateOfBirth = getDateOfBirthFromBirthdays(
          initialState.dateOfBirth,
          birthdays
        );
        state.email = getEmailFromEmailAddresses(
          initialState.email,
          emailAddresses
        );
        state.phoneNumber = getPhoneNumberFromPhoneNumbers(
          initialState.phoneNumber,
          phoneNumbers
        );
      })
      .addCase(getInfoAboutMe.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message ?? 'Unknown error...';
      });
  },
});

const { reducer } = slice;

export { reducer, selectProfile, getInfoAboutMe };
