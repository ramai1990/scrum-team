import type {
  CreateABoardQueryParameters,
  CreateABoardResponse,
} from 'src/shared/api/trello';
import type { RequestStatus } from 'src/shared/helpers/redux';

type State = {
  status: RequestStatus;
  error: string | null;
  newBoard: Required<
    Pick<CreateABoardResponse, 'id' | 'url' | 'name' | 'message'>
  > | null;
};

type BackgroundColorName = NonNullable<
  CreateABoardQueryParameters['prefs_background']
>;

type BackgroundColorValue =
  | '#0079bf'
  | '#519839'
  | '#88629e'
  | '#cd5a91'
  | '#838c91'
  | '#00aecc'
  | '#4bbf6b'
  | '#d29034'
  | '#b04632'
  | null;

export type { State, BackgroundColorValue, BackgroundColorName };
