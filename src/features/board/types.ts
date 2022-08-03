import {
  GetABoardResponse,
  GetListsOnABoardResponse,
  GetCardsOnABoardResponse,
} from 'src/shared/api/trello';
import { RequestStatus } from 'src/shared/helpers/redux';

interface State {
  boardName: GetABoardResponse | string | undefined;
  lists: GetListsOnABoardResponse[];
  cards: GetCardsOnABoardResponse[];
  status: RequestStatus;
  error: null | string;
}

export type { State };
