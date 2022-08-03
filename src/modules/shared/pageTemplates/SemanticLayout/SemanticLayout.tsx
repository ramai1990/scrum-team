import { FC, ReactNode } from 'react';
import { useTheme } from '@mui/material';

import { Box, Container } from 'src/shared/components';

import { Header } from './Header/Header';
import { createStyles } from './SemanticLayout.style';
import { SideBar } from './SideBar/SideBar';
import { SideBarItems } from './types';

type Props = {
  withHeader?: boolean;
  withHeading?: boolean;
  sideBarItems?: SideBarItems | null;
  heading?: ReactNode;
};

const SemanticLayout: FC<Props> = ({
  children,
  withHeader = false,
  withHeading = false,
  sideBarItems = null,
  heading = null,
}) => {
  const theme = useTheme();
  const styles = createStyles({ withHeader, withHeading, sideBarItems }, theme);

  return (
    <Box css={styles.root()}>
      {withHeader && (
        <Box css={styles.header()}>
          <Header />
        </Box>
      )}
      <Container css={styles.content()} maxWidth={1274}>
        {withHeading && <Box css={styles.heading()}>{heading}</Box>}
        {sideBarItems !== null && (
          <Box css={styles.sideBar()}>
            <SideBar items={sideBarItems} />
          </Box>
        )}
        <main css={styles.main()}>{children}</main>
      </Container>
    </Box>
  );
};

export type { Props };

export { SemanticLayout };
