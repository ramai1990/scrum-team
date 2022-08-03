import { fetchGetListsOnABoard } from 'src/shared/api/trello';

import {
  archiveOrUnarchiveLists,
  createLists,
  fillBoardByCards,
} from './tasks';

type Options = {
  boardID: string;
  token: string;
  lists: { name: string; cards: { name: string }[] }[];
};

const syncWithTrelloBoard = async ({ token, boardID, lists }: Options) => {
  try {
    const currentListsResponse = await fetchGetListsOnABoard({
      token,
      boardID,
    });

    if (currentListsResponse instanceof globalThis.Error) {
      return currentListsResponse;
    }

    const currentLists = await (<globalThis.Response>(
      currentListsResponse
    )).json();

    const archivedLists = await archiveOrUnarchiveLists({
      token,
      lists: currentLists,
      closed: true,
    });
    const createdLists = await createLists({ token, boardID, lists });

    const cards = lists
      .map(({ name: listName, cards: listCards }) =>
        listCards.map(({ name: cardName }) => {
          const currentCreatedList = createdLists.find(
            ({ name: createdListName }) => createdListName === listName
          );

          const isCurrentCreatedListWrong =
            currentCreatedList instanceof globalThis.Error ||
            currentCreatedList === undefined;

          if (isCurrentCreatedListWrong) {
            return null;
          }

          const { id: listID } = currentCreatedList;

          if (listID === undefined) {
            return null;
          }

          return { listID, name: cardName };
        })
      )
      .flat();
    const validCards = <
      {
        listID: string;
        name: string;
      }[]
    >cards.filter((card) => card !== null);

    const createdCards = await fillBoardByCards({
      token,
      cards: validCards,
    });

    return { archivedLists, createdLists, createdCards };
  } catch (e) {
    return <globalThis.Error>e;
  }
};

export { syncWithTrelloBoard };
