import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  fetchCreateABoard,
  CreateABoardQueryParameters,
} from 'src/shared/api/trello';

const createBoard = createAsyncThunk(
  'boardCreation/createBoard',
  async (queryParameters: CreateABoardQueryParameters) => {
    const result = await fetchCreateABoard(queryParameters);

    if (result instanceof globalThis.Error) {
      return Promise.reject(result);
    }

    return result;
  }
);

export { createBoard };
