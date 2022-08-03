import {
  GetCardsOnABoardResponse,
  GetListsOnABoardResponse,
} from 'src/shared/api/trello';

type GoogleSheetData = {
  value: string[][];
};

// Тип gapi, см. gapi.client.sheets.ValueRange.values
type SheetValue = any[][];

type TrelloData = {
  cardLists: GetListsOnABoardResponse[];
  cards: Partial<GetCardsOnABoardResponse>[];
};

export type { GoogleSheetData, TrelloData, SheetValue };
