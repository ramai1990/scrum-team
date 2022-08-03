import { useState } from 'react';

import { SemanticLayout } from 'src/modules/shared';
import type { NextPageWithLayout } from 'src/shared/types';
import { Box, PageHead } from 'src/shared/components';
import { isGoogleSignedIn } from 'src/shared/api/google/identity';
import { getGoogleAPI } from 'src/shared/api/google';
import { GoogleAuthorization } from 'src/features/googleAuthorization';
import { GoogleProfile } from 'src/features/googleProfile';

import { createStyles } from './Google.style';
import { discoveryDocs, scope, sideBarItems } from './constants';

const Google: NextPageWithLayout = () => {
  const gapi = getGoogleAPI();
  const [isSignedIn, setSignedIn] = useState(isGoogleSignedIn(gapi));

  const styles = createStyles();

  const handleGoogleAuthorizationAuth = (isAuth: boolean) => {
    setSignedIn(isAuth);
  };

  return (
    <>
      <PageHead
        title={isSignedIn ? 'Профиль Google' : 'Авторизация в Google'}
      />
      <Box css={styles.root}>
        {!isSignedIn && (
          <GoogleAuthorization
            discoveryDocs={discoveryDocs}
            scope={scope}
            onAuth={handleGoogleAuthorizationAuth}
          />
        )}
        {isSignedIn && <GoogleProfile gapi={gapi} />}
      </Box>
    </>
  );
};

Google.getLayout = (page) => {
  return (
    <SemanticLayout withHeader withHeading sideBarItems={sideBarItems}>
      {page}
    </SemanticLayout>
  );
};

export { Google };
