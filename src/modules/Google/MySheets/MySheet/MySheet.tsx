import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { SemanticLayout } from 'src/modules/shared';
import { Spreadsheet as SpreadsheetFeature } from 'src/features/spreadsheet';
import type { NextPageWithLayout } from 'src/shared/types';
import { PageHead } from 'src/shared/components';
import { isGoogleSignedIn } from 'src/shared/api/google/identity';
import { getGoogleAPI } from 'src/shared/api/google';

import { routes, sideBarItems } from '../../constants';

const MySheet: NextPageWithLayout = () => {
  const router = useRouter();
  const { id } = router.query;

  const gapi = getGoogleAPI();
  const gapiIsReady = gapi !== undefined && isGoogleSignedIn(gapi);

  const selectedTable = `https://docs.google.com/spreadsheets/d/${id}/edit#gid=0`;

  useEffect(() => {
    if (!isGoogleSignedIn(gapi)) {
      router.replace(routes.self);
    }
  }, [router, gapi]);

  return (
    <>
      <PageHead title="Моя таблица" />
      {gapiIsReady && (
        <SpreadsheetFeature spreadsheetID={`${id}`} href={selectedTable} />
      )}
    </>
  );
};

MySheet.getLayout = (page) => {
  return (
    <SemanticLayout withHeader sideBarItems={sideBarItems}>
      {page}
    </SemanticLayout>
  );
};

export { MySheet };
