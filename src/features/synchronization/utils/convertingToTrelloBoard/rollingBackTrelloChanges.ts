import { archiveOrUnarchiveLists } from './tasks';

type Options = {
  token: string;
  listsToArchive: {
    id: string;
  }[];
  listsToUnarchive: {
    id: string;
  }[];
};

const rollingBackTrelloChanges = ({
  token,
  listsToArchive,
  listsToUnarchive,
}: Options) => {
  return Promise.all([
    archiveOrUnarchiveLists({
      token,
      lists: listsToArchive,
      closed: true,
    }),
    archiveOrUnarchiveLists({
      token,
      lists: listsToUnarchive,
      closed: false,
    }),
  ]);
};

export { rollingBackTrelloChanges };
