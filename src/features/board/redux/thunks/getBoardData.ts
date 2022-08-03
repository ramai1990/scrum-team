import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  GetABoardResponse,
  GetListsOnABoardResponse,
  GetCardsOnABoardResponse,
  fetchGetABoard,
  fetchGetListsOnABoard,
  fetchGetCardsOnABoard,
} from 'src/shared/api/trello';

type QueryParameters = {
  boardID: string;
  token: string;
};
type Response = Partial<{
  boardName: GetABoardResponse;
  lists: GetListsOnABoardResponse[];
  cards: GetCardsOnABoardResponse[];
  message: string;
}>;

const getBoardData = createAsyncThunk(
  'board/getBoardData',
  async ({ boardID, token }: QueryParameters): Promise<Response> => {
    const boardNameResponse = await fetchGetABoard({ boardID, token });
    const cardListsResponse = await fetchGetListsOnABoard({ boardID, token });
    const cardsResponse = await fetchGetCardsOnABoard({ boardID, token });

    const hasError =
      boardNameResponse instanceof globalThis.Error ||
      cardListsResponse instanceof globalThis.Error ||
      cardsResponse instanceof globalThis.Error;

    if (hasError) {
      const message =
        boardNameResponse.message ??
        cardListsResponse.message ??
        cardsResponse.message;

      return { message };
    }

    const boardNameData = await (<globalThis.Response>boardNameResponse).json();

    const cardListsData = await (<globalThis.Response>cardListsResponse).json();

    const cardsData = await (<globalThis.Response>cardsResponse).json();

    const data = {
      boardName: boardNameData,
      lists: cardListsData,
      cards: cardsData,
    };

    return data;
  }
);

export { getBoardData };
