import type {
  FetchBoardsResponse,
  Board as ResponseBoard,
} from 'src/shared/api/trello/GetBoards';
import { filterMap } from 'src/shared/helpers/scripts/arrays';

import type { Board } from '../types';

const conversionBoardsFromResponse = (
  responseBoards: FetchBoardsResponse
): Board[] => {
  const boards: Board[] = filterMap<ResponseBoard, Board>(
    responseBoards,
    (item) => Boolean(item && item.id),
    (item) => {
      const { id = '', name = '', desc = '', prefs, memberships } = item;
      const members = memberships ? memberships.length : 0;
      const color = prefs ? prefs.backgroundColor : null;
      const withImage = prefs && prefs.backgroundImageScaled;
      const images = withImage ? prefs.backgroundImageScaled : null;
      const image = images ? images[2].url : null;

      return { id, name, desc, members, color, image };
    }
  );

  return boards;
};

export { conversionBoardsFromResponse };
