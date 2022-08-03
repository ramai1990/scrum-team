import { fillListByCards } from './fillListByCards';

type Options = {
  token: string;
  cards: { listID: string; name: string }[];
};

type PerListCards = { [listID: string]: { name: string }[] };

const fillBoardByCards = async ({ token, cards }: Options) => {
  const perListCards = cards.reduce<PerListCards>((accumulator, card) => {
    const { listID, name } = card;
    const names = accumulator[listID];

    if (names === undefined) {
      return { ...accumulator, [listID]: [{ name }] };
    }

    names.push({ name });

    return { ...accumulator, [listID]: names };
  }, {});

  return Promise.all(
    Object.entries(perListCards).map(([listID, listCards]) => {
      return fillListByCards({ token, listID, cards: listCards });
    })
  );
};

export { fillBoardByCards };
