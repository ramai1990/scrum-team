import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { isServerSideRendered } from 'src/core';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { routes, sideBarItems } from 'src/modules/Trello/constants';
import { SemanticLayout } from 'src/modules/shared';
import {
  selectStatus,
  selectError,
  statusReset,
} from 'src/features/boardCreation';
import type { NextPageWithLayout } from 'src/shared/types';
import { PageHead, Typography } from 'src/shared/components';

import { createStyles } from './RejectedCreation.style';

const RejectedCreation: NextPageWithLayout = () => {
  const styles = createStyles();

  const router = useRouter();
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectStatus);
  const errorMessage = useAppSelector(selectError);

  useEffect(() => {
    const handleRouteChange = () => {
      dispatch(statusReset());
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router, dispatch]);

  const shouldRedirect = status !== 'rejected' && !isServerSideRendered();

  if (shouldRedirect) {
    router.replace(routes.boardCreation.self);
  }

  return (
    <>
      <PageHead title="Ошибка при создании доски trello" />
      <Typography css={styles.message} variant="h4">
        Ошибка: {errorMessage}
      </Typography>
    </>
  );
};

RejectedCreation.getLayout = (page) => {
  return (
    <SemanticLayout withHeader withHeading sideBarItems={sideBarItems}>
      {page}
    </SemanticLayout>
  );
};

export { RejectedCreation };
