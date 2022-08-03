import { FC } from 'react';
import { useTheme } from '@mui/material';

import { Link, Typography } from 'src/shared/components';

import { SYNC_ACTION } from '../../../constants';
import { FileInfo, SyncAction } from '../../../types';
import { createStyles } from './Message.style';

type Props = {
  fromFileInfo: FileInfo;
  toFileInfo: FileInfo;
  action: SyncAction;
  errorText?: string | null;
  withError?: boolean;
};

const Message: FC<Props> = ({
  action,
  fromFileInfo,
  toFileInfo,
  errorText = null,
  withError = false,
}) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  const leftLink = {
    ...{
      url: '/',
      title: 'Left file',
      details: '',
    },
    ...fromFileInfo,
  };
  const rightLink = {
    ...{
      url: '/',
      title: 'Right file',
      details: '',
    },
    ...toFileInfo,
  };

  const actionText =
    action === SYNC_ACTION.sync
      ? 'Synchronization'
      : 'Rollback synchronization';

  if (withError) {
    return (
      <Typography css={styles.root()}>
        {errorText ?? 'Unknown error...'}
      </Typography>
    );
  }

  return (
    <Typography css={styles.root()}>
      {actionText} from{' '}
      <Link
        css={styles.link()}
        href={leftLink.url}
        title={leftLink.title}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Typography css={styles.linkText()} component="span" noWrap>
          {leftLink.title}
        </Typography>
        {leftLink.details !== '' && (
          <>
            {' / '}
            <Typography css={styles.linkText()} component="span" noWrap>
              {leftLink.details}
            </Typography>
          </>
        )}
      </Link>{' '}
      to{' '}
      <Link
        css={styles.link()}
        href={rightLink.url}
        title={rightLink.title}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Typography css={styles.linkText()} component="span" noWrap>
          {rightLink.title}
        </Typography>
        {rightLink.details !== '' && (
          <>
            {' / '}
            <Typography css={styles.linkText()} component="span" noWrap>
              {rightLink.details}
            </Typography>
          </>
        )}
      </Link>{' '}
      completed successfully !
    </Typography>
  );
};

export type { Props };

export { Message };
