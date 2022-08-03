import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchPeoplePeopleGet } from 'src/shared/api/google/people';

const getInfoAboutMe = createAsyncThunk(
  'googleProfile/getInfoAboutMe',
  async (gapi: Parameters<typeof fetchPeoplePeopleGet>['1']) => {
    const result = await fetchPeoplePeopleGet(
      {
        resourceName: 'people/me',
        personFields: 'names,emailAddresses,birthdays,phoneNumbers,photos',
      },
      gapi
    );

    if (result instanceof globalThis.Error) {
      return Promise.reject(result);
    }

    return result;
  }
);

export { getInfoAboutMe };
