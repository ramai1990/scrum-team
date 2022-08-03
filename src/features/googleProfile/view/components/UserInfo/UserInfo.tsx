import { useTheme } from '@mui/material';
import { FC } from 'react';

import { Avatar, Box } from 'src/shared/components';

import { InfoList } from '../InfoList/InfoList';
import { createStyles } from './UserInfo.style';

type Props = {
  fullName: string;
  avatarURL: string;
  dateOfBirth: string | null;
  email: string | null;
  phoneNumber: string | null;
};

const UserInfo: FC<Props> = ({
  fullName,
  avatarURL,
  dateOfBirth,
  email,
  phoneNumber,
}) => {
  const theme = useTheme();
  const styles = createStyles({}, theme);

  return (
    <Box css={styles.root()}>
      <Box css={styles.avatar()}>
        <Avatar
          hasImage={Boolean(avatarURL)}
          userName={fullName}
          src={avatarURL}
          alt={fullName}
        ></Avatar>
      </Box>
      <Box css={styles.info()}>
        <InfoList items={[fullName, dateOfBirth, email, phoneNumber]} />
      </Box>
    </Box>
  );
};

export { UserInfo };
