import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchBoards } from 'src/shared/api/trello/GetBoards';

const getBoards = createAsyncThunk(
  'boards/getBoards',
  async (token: string) => {
    return fetchBoards(token);
  }
);

export { getBoards };
