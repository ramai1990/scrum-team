import { fetchArchiveOrUnarchiveAList } from 'src/shared/api/trello';

type Options = {
  token: string;
  closed: boolean;
  lists: { id: string }[];
};

const archiveOrUnarchiveLists = async ({ token, lists, closed }: Options) => {
  return Promise.all(
    lists.map(({ id }) =>
      fetchArchiveOrUnarchiveAList({ token, closed, listID: id })
    )
  );
};

export { archiveOrUnarchiveLists };
