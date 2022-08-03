import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useAppSelector } from 'src/app/hooks';
import { routes, sideBarItems } from 'src/modules/Trello/constants';
import { SemanticLayout } from 'src/modules/shared';
import { selectToken } from 'src/features/trelloAuthorization';
import { selectBoardName } from 'src/features/board';
import { Card as CardFeature, selectData } from 'src/features/card';
import type { NextPageWithLayout } from 'src/shared/types';
import { PageHead } from 'src/shared/components';

const MyCard: NextPageWithLayout = () => {
  const router = useRouter();
  const { query } = router;
  const { cardID } = query;

  const boardName = useAppSelector(selectBoardName);
  const cardData = useAppSelector(selectData);

  const trelloToken = useAppSelector(selectToken);

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
      <PageHead title="Список карточек" />
      <CardFeature
        trelloToken={trelloToken}
        cardID={`${cardID}`}
        href={`${routes.myBoards.self}/${query.boardID}`}
        boardName={`${boardName} / ${cardData && cardData.name}`}
      />
    </>
  );
};

MyCard.getLayout = (page) => {
  return (
    <SemanticLayout withHeader sideBarItems={sideBarItems}>
      {page}
    </SemanticLayout>
  );
};

export { MyCard };
