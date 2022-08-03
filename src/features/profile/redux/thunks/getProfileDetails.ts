import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchMember } from 'src/shared/api/trello';
import type {
  MemberQueryParameters,
  MemberResponse,
} from 'src/shared/api/trello';

const getProfileDetails = createAsyncThunk(
  'profile/getProfileDetails',
  async (queryParameters: MemberQueryParameters): Promise<MemberResponse> => {
    const data = await fetchMember(queryParameters);

    return data;
  }
);

export { getProfileDetails };
