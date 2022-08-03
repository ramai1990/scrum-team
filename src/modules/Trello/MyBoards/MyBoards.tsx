import { useTheme } from '@mui/material';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { routes, sideBarItems } from 'src/modules/Trello/constants';
import { SemanticLayout } from 'src/modules/shared';
import { selectToken } from 'src/features/trelloAuthorization';
import { selectRouteToChosen } from 'src/features/boards/redux/slice';
import { BoardsProps, goToBoard } from 'src/features/boards';
import type { NextPageWithLayout } from 'src/shared/types';
import { LinearProgress, PageHead, Typography } from 'src/shared/components';

import { createStyles } from './MyBoards.style';

const Boards = dynamic<BoardsProps>(
  () => import('src/features/boards/Boards').then((feature) => feature.Boards),
  { loading: () => <LinearProgress /> }
);

const MyBoards: NextPageWithLayout = () => {
  const router = useRouter();

  const theme = useTheme();
  const styles = createStyles(theme);

  const dispatch = useAppDispatch();
  const token = useAppSelector(selectToken);
  const routeToChosen = useAppSelector(selectRouteToChosen);

  useEffect(() => {
    if (token === null) {
      router.replace(routes.self);
    }
  }, [router, token]);

  useEffect(() => {
    if (routeToChosen !== null) {
      dispatch(goToBoard(null));
      router.push(routeToChosen);
    }
  }, [dispatch, router, routeToChosen]);

  return (
    <>
      <PageHead title="My Boards" />
      {token ? (
        <div css={styles.boardsWrapper}>
          <Boards token={token} route={routes.myBoards.self} />
        </div>
      ) : (
        <Typography>
          <LinearProgress />
          Redirecting to authorization page...
        </Typography>
      )}
    </>
  );
};

MyBoards.getLayout = (page) => {
  return (
    <SemanticLayout withHeader withHeading sideBarItems={sideBarItems}>
      {page}
    </SemanticLayout>
  );
};

export { MyBoards };
