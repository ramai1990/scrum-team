import {
  GetListsOnABoardResponse,
  GetCardsOnABoardResponse,
} from 'src/shared/api/trello';

import { GoogleSheetData, TrelloData } from '../types';

const trelloBoardToGoogleSheet = ({
  cardLists,
  cards,
}: TrelloData): GoogleSheetData => {
  const arrayOfListAndCards: string[][] = [];

  cardLists.forEach((cardList: GetListsOnABoardResponse) => {
    const { id, name } = cardList;
    const currentArr = [];

    if (id === undefined || name === undefined) {
      currentArr.push(null);

      return;
    }

    currentArr.push(name);

    cards
      .filter((card: Partial<GetCardsOnABoardResponse>) => card.idList === id)
      .forEach((card: Partial<GetCardsOnABoardResponse>) => {
        const cardName = card.name;

        if (cardName === undefined) {
          currentArr.push(null);

          return;
        }

        currentArr.push(cardName);
      });

    arrayOfListAndCards.push(currentArr);
  });

  const data = {
    value: arrayOfListAndCards,
  };

  return data;
};

export { trelloBoardToGoogleSheet };
