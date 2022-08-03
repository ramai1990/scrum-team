import { useEffect } from 'react';
import { useTheme } from '@mui/material';
import { useRouter } from 'next/router';

import { useAppSelector } from 'src/app/hooks';
import { routes, sideBarItems } from 'src/modules/Trello/constants';
import { SemanticLayout } from 'src/modules/shared';
import { BoardCreation as BoardCreationFeature } from 'src/features/boardCreation';
import { selectToken } from 'src/features/trelloAuthorization';
import type { NextPageWithLayout } from 'src/shared/types';
import { PageHead, Box } from 'src/shared/components';

import { createStyles } from './BoardCreation.style';

const BoardCreation: NextPageWithLayout = () => {
  const theme = useTheme();
  const styles = createStyles({}, theme);

  const router = useRouter();
  const trelloToken = useAppSelector(selectToken);

  useEffect(() => {
    if (trelloToken === null) {
      router.replace(routes.self);
    }
  }, [router, trelloToken]);

  const handleBoardCreationFulfilled = () => {
    router.push(routes.boardCreation.fulfilledCreation);
  };

  const handleBoardCreationRejected = () => {
    router.push(routes.boardCreation.rejectedCreation);
  };

  return (
    <>
      <PageHead title="Создание доски trello" />
      <Box css={styles.root}>
        {trelloToken !== null && (
          <BoardCreationFeature
            trelloToken={trelloToken}
            onFulfilled={handleBoardCreationFulfilled}
            onRejected={handleBoardCreationRejected}
          />
        )}
      </Box>
    </>
  );
};

BoardCreation.getLayout = (page) => {
  return (
    <SemanticLayout withHeader withHeading sideBarItems={sideBarItems}>
      {page}
    </SemanticLayout>
  );
};

export { BoardCreation };
