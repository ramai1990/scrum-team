import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchGetACard, fetchGetActionsOnACard } from 'src/shared/api/trello';

type QueryParameters = {
  trelloToken: string;
  cardID: string;
};

const getData = createAsyncThunk(
  'card/getData',
  async ({ cardID, trelloToken }: QueryParameters) => {
    const cardQueryParameters = {
      members: true,
      fields: 'dateLastActivity,desc,labels,name,url',
      member_fields: 'avatarUrl,fullName',
      board: true,
      board_fields: 'name',
    };
    const actionsQueryParameters = { filter: 'commentCard' };

    const card = await fetchGetACard({
      token: trelloToken,
      id: cardID,

      ...cardQueryParameters,
    });
    const actions = await fetchGetActionsOnACard({
      token: trelloToken,
      id: cardID,

      ...actionsQueryParameters,
    });

    const hasError =
      card instanceof globalThis.Error || actions instanceof globalThis.Error;

    if (hasError) {
      const message = card.message ?? actions.message;

      return { message };
    }

    const data = { card, actions };

    return data;
  }
);

export { getData };
