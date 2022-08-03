import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useTheme } from '@mui/material';

import { useAppSelector } from 'src/app/hooks';
import { SemanticLayout } from 'src/modules/shared';
import {
  Spreadsheets as SpreadsheetsFeature,
  selectError,
} from 'src/features/spreadsheets';
import type { NextPageWithLayout } from 'src/shared/types';
import { PageHead, Alert, Box } from 'src/shared/components';
import { isGoogleSignedIn } from 'src/shared/api/google/identity';
import { getGoogleAPI } from 'src/shared/api/google';

import { routes, sideBarItems } from '../constants';
import { createStyles } from './MySheets.style';

const MySheets: NextPageWithLayout = () => {
  const theme = useTheme();
  const styles = createStyles({}, theme);

  const router = useRouter();
  const error = useAppSelector(selectError);

  const gapi = getGoogleAPI();
  const gapiIsReady = gapi !== undefined && isGoogleSignedIn(gapi);

  useEffect(() => {
    if (!isGoogleSignedIn(gapi)) {
      router.replace(routes.self);
    }
  }, [router, gapi]);

  return (
    <>
      <PageHead title="Мои таблицы" />
      <Box css={styles.root}>
        {error !== null && <Alert severity="error">{error}</Alert>}
        {gapiIsReady && (
          <SpreadsheetsFeature route={routes.mySheets.self} gapi={gapi} />
        )}
      </Box>
    </>
  );
};

MySheets.getLayout = (page) => {
  return (
    <SemanticLayout withHeader withHeading sideBarItems={sideBarItems}>
      {page}
    </SemanticLayout>
  );
};

export { MySheets };
