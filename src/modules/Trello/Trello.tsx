import { useTheme } from '@mui/material';

import { SemanticLayout } from 'src/modules/shared';
import type { NextPageWithLayout } from 'src/shared/types';
import { Box, PageHead } from 'src/shared/components';
import { Profile } from 'src/features/profile';
import {
  selectToken,
  TrelloAuthorization,
} from 'src/features/trelloAuthorization';
import { useAppSelector } from 'src/app/hooks';

import { createStyles } from './Trello.style';
import { sideBarItems } from './constants';

const Trello: NextPageWithLayout = () => {
  const theme = useTheme();
  const styles = createStyles({}, theme);
  const trelloToken = useAppSelector(selectToken);

  return (
    <>
      <PageHead
        title={trelloToken ? 'Профиль Trello' : 'Авторизация в Trello'}
      />
      <Box css={styles.root()}>
        {trelloToken === null ? (
          <TrelloAuthorization />
        ) : (
          <Profile trelloToken={trelloToken} />
        )}
      </Box>
    </>
  );
};

Trello.getLayout = (page) => {
  return (
    <SemanticLayout withHeader withHeading sideBarItems={sideBarItems}>
      {page}
    </SemanticLayout>
  );
};

export { Trello };
