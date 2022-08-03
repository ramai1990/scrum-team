import { fetchCreateAListOnABoard } from 'src/shared/api/trello';

type Options = {
  token: string;
  boardID: string;
  lists: { name: string }[];
};

const createLists = async ({ token, boardID, lists }: Options) => {
  let pos = 1;

  return Promise.all(
    lists.map(async ({ name }) => {
      pos += 1;

      const result = await fetchCreateAListOnABoard({
        token,
        boardID,
        name,
        pos,
      });

      return result;
    })
  );
};

export { createLists };
