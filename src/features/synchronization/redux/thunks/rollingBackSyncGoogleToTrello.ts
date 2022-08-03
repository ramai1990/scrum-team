import { createAsyncThunk } from '@reduxjs/toolkit';

import { TrelloData } from '../../types';
import { rollingBackTrelloChanges } from '../../utils';

type Args = {
  trelloData: TrelloData;
  trelloToken: string;
};

const rollingBackSyncGoogleToTrello = createAsyncThunk(
  'synchronization/rollingBackSyncGoogleToTrello',
  async ({ trelloData, trelloToken }: Args) => {
    const { archivedLists, createdLists } = trelloData;

    const listsToArchive = <{ id: string }[]>(
      createdLists.filter(({ id }) => id !== undefined)
    );

    const listsToUnarchive = <{ id: string }[]>(
      archivedLists.filter(({ id }) => id !== undefined)
    );

    const response = await rollingBackTrelloChanges({
      listsToArchive,
      listsToUnarchive,
      token: trelloToken,
    });

    if (response instanceof globalThis.Error) {
      return Promise.reject(response);
    }

    return response;
  }
);

export { rollingBackSyncGoogleToTrello };
