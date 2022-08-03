import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useTheme } from '@mui/material';

import { isServerSideRendered } from 'src/core';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { routes, sideBarItems } from 'src/modules/Trello/constants';
import { SemanticLayout } from 'src/modules/shared';
import {
  selectStatus,
  selectNewBoard,
  statusReset,
} from 'src/features/boardCreation';
import type { NextPageWithLayout } from 'src/shared/types';
import {
  PageHead,
  Grid,
  Typography,
  Link,
  Button,
} from 'src/shared/components';

import { createStyles } from './FulfilledCreation.style';

const FulfilledCreation: NextPageWithLayout = () => {
  const theme = useTheme();
  const styles = createStyles({}, theme);

  const router = useRouter();
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectStatus);
  const newBoard = useAppSelector(selectNewBoard);

  useEffect(() => {
    const handleRouteChange = () => {
      dispatch(statusReset());
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router, dispatch]);

  const shouldRedirect = status !== 'fulfilled' && !isServerSideRendered();

  if (shouldRedirect) {
    router.replace(routes.boardCreation.self);
  }

  if (newBoard === null) {
    return null;
  }

  const { name, id, url } = newBoard;

  return (
    <>
      <PageHead title="Успешное создание доски trello" />
      <Grid css={styles.root()} container direction="column">
        <Grid item>
          <Typography css={styles.name()} variant="h4">
            {name} board was created!
          </Typography>
        </Grid>
        <Grid item>
          <Typography css={styles.id()} variant="h4">
            ID:{' '}
            <Typography css={styles.link()} variant="h4" component="span">
              <Link
                href={`${routes.myBoards.self}/${id}`}
                underline="hover"
                fontSize="inherit"
                letterSpacing="inherit"
                noWrap
              >
                {id}
              </Link>
            </Typography>
          </Typography>
        </Grid>
        <Grid item>
          <Typography css={styles.url()} variant="h4">
            URL:{' '}
            <Typography css={styles.link()} variant="h4" component="span">
              <Link
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
                fontSize="inherit"
                letterSpacing="inherit"
                noWrap
              >
                {url}
              </Link>
            </Typography>
          </Typography>
        </Grid>
        <Grid item css={styles.button()}>
          <Button
            href={`${routes.myBoards.self}/${id}`}
            variant="contained"
            size="extra-large"
            borderRadius="rounded"
            fullWidth
            shadow
          >
            Go to board
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

FulfilledCreation.getLayout = (page) => {
  return (
    <SemanticLayout withHeader withHeading sideBarItems={sideBarItems}>
      {page}
    </SemanticLayout>
  );
};

export { FulfilledCreation };
