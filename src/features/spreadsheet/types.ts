import { SpreadsheetValues } from 'src/shared/api/google/sheets';
import { Item as ButtonListItem } from 'src/shared/components/ButtonList/types';
import type { RequestStatus } from 'src/shared/helpers/redux';

type State = {
  items: SpreadsheetValues;
  status: RequestStatus;
  error: string | null;
};

export type { State, ButtonListItem };
