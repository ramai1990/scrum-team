import { SheetValues } from 'src/shared/api/google/sheets';

type GoogleSheetData = SheetValues;
type TrelloBoard = { name: string; cards: { name: string }[] }[];

export type { GoogleSheetData, TrelloBoard };
