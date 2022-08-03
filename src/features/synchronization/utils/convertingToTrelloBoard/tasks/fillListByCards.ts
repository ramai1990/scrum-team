import { fetchCreateANewCard } from 'src/shared/api/trello';

type Options = {
  token: string;
  listID: string;
  cards: { name: string }[];
};

const fillListByCards = async ({ token, listID, cards }: Options) => {
  let pos = 1;

  return Promise.all(
    cards.map(async ({ name }) => {
      pos += pos;

      const result = await fetchCreateANewCard({
        token,
        name,
        idList: listID,
        pos,
      });

      return result;
    })
  );
};

export { fillListByCards };
