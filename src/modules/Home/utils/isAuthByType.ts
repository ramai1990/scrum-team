import { selectToken } from 'src/features/trelloAuthorization';
import { getGoogleAPI } from 'src/shared/api/google';
import { isGoogleSignedIn } from 'src/shared/api/google/identity';

import { FILE_TYPE } from '../constants';
import { FileType } from '../types';

const isAuthByType = (
  byType: FileType,
  trelloToken: ReturnType<typeof selectToken>,
  gapi: ReturnType<typeof getGoogleAPI>
): boolean => {
  switch (byType) {
    case FILE_TYPE.board:
      return Boolean(trelloToken);
    case FILE_TYPE.sheet:
      return isGoogleSignedIn(gapi);
    default:
      return false;
  }
};

export { isAuthByType };
