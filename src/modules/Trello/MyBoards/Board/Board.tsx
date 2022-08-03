import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useAppSelector } from 'src/app/hooks';
import { selectToken } from 'src/features/trelloAuthorization';
import { Board as BoardFeature, selectBoardName } from 'src/features/board';
import { routes, sideBarItems } from 'src/modules/Trello/constants';
import { SemanticLayout } from 'src/modules/shared';
import type { NextPageWithLayout } from 'src/shared/types';
import { PageHead } from 'src/shared/components';

const Board: NextPageWithLayout = () => {
  const router = useRouter();

  const { query } = useRouter();
  const { boardID } = query;

  const trelloToken = useAppSelector(selectToken);
  const boardName = useAppSelector(selectBoardName);

  useEffect(() => {
    if (trelloToken === null) {
      router.replace(routes.self);
    }
  }, [router, trelloToken]);

  if (trelloToken === null) {
    return null;
  }

  return (
    <>
      <PageHead title="My Board" />
      <BoardFeature
        boardID={`${boardID}`}
        route={`${routes.myBoards.self}/${boardID}`}
        token={`${trelloToken}`}
        boardName={`${boardName}`}
        href={routes.myBoards.self}
      />
    </>
  );
};

Board.getLayout = (page) => {
  return (
    <SemanticLayout withHeader sideBarItems={sideBarItems}>
      {page}
    </SemanticLayout>
  );
};

export { Board };
