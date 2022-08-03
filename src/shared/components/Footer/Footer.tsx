import { FC, MouseEventHandler, ReactNode, MutableRefObject } from 'react';
import { useTheme } from '@mui/material';

import type { DragEvent } from '../File/types';
import { Box } from '../Box/Box';
import { Container } from '../Container/Container';
import { MediaControls } from '../MediaControls/MediaControls';
import { SettingButton } from './SettingButton/SettingButton';
import { User } from './User/User';
import { Service } from './Service/Service';
import { createStyles } from './Footer.style';

type Props = {
  users: { service: string; name: string; href: string }[];
  services?: { serviceName: string; type: 'sheet' | 'board' }[];
  targets?: MutableRefObject<null>[];
  controls?: ReactNode[];
  onDrag: (event: DragEvent) => void;
  onPlay?: MouseEventHandler<HTMLButtonElement>;
  onStop?: MouseEventHandler<HTMLButtonElement>;
};

const Footer: FC<Props> = ({
  users,
  services = [
    { serviceName: 'Trello', type: 'board' },
    { serviceName: 'Google sheets', type: 'sheet' },
  ],
  targets = [],
  controls = [],
  onDrag,
  onPlay,
  onStop,
}) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <Box css={styles.root} component="footer">
      <Container maxWidth={1286}>
        <Box css={styles.nav}>
          <MediaControls onPlay={onPlay} onStop={onStop} />
          <Box css={styles.services}>
            {services.map(({ serviceName, type }, i) => (
              <Service
                key={i}
                serviceName={serviceName}
                type={type}
                targets={targets}
                onDrag={onDrag}
              />
            ))}
            <SettingButton buttonName="Настройки" controls={controls} />
          </Box>
          <Box css={styles.users}>
            {users.map(({ service, name, href }, i) => (
              <User key={i} title={service} user={name} href={href} />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export type { Props };

export { Footer };
