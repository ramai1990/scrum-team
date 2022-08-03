import { FC } from 'react';

import { googleSignIn, isGoogleSignedIn } from 'src/shared/api/google/identity';
import { initGoogleAPI } from 'src/shared/api/google';

import { AuthBox } from './view/components';

type Props = {
  discoveryDocs: string[];
  scope: string;
  onAuth: (isAuth: boolean) => void;
};

const GoogleAuthorization: FC<Props> = ({ discoveryDocs, scope, onAuth }) => {
  const handleRootAuth = async () => {
    const gapi = await initGoogleAPI({ discoveryDocs, scope });
    await googleSignIn(gapi);
    onAuth(isGoogleSignedIn(gapi));
  };

  return <AuthBox onAuth={handleRootAuth} />;
};

export type { Props };

export { GoogleAuthorization };
