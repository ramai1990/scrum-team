import type { RequestStatus } from 'src/shared/helpers/redux';
import { Item as ButtonListItem } from 'src/shared/components/ButtonList/types';

type State = {
  status: RequestStatus;
  error: string | null;
  files: {
    items: SpreadsheetFile[];
    nextPageToken?: string;
  };
};

type SpreadsheetFile = Pick<globalThis.gapi.client.drive.File, 'id' | 'name'>;

export type { State, SpreadsheetFile, ButtonListItem };
