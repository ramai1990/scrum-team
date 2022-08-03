import { useTheme } from '@mui/material';
import { FC, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from 'src/app/hooks';
import { Avatar, Box, Typography } from 'src/shared/components';
import { REQUEST_STATUS } from 'src/shared/helpers/redux';
import { AvatarCorrectSize } from 'src/shared/api/trello/types';

import { CircularProgress } from '../../shared/components/Progress';
import { getProfileDetails } from './redux/thunks';
import { selectProfile } from './redux/selectors';
import { createStyles } from './Profile.style';

type Props = {
  trelloToken: string;
};

const Profile: FC<Props> = ({ trelloToken }) => {
  const theme = useTheme();
  const styles = createStyles({}, theme);

  const dispatch = useAppDispatch();
  const { avatarURL, boardIDs, description, fullName, status } =
    useAppSelector(selectProfile);

  const hasDescription = Boolean(description.trim());
  const formattedDescription = description.replace(/\u2028/g, '').split('\n');
  const AVATAR_SIZE: AvatarCorrectSize = '170.png';

  useEffect(() => {
    if (trelloToken !== null) {
      dispatch(getProfileDetails({ token: trelloToken, id: 'me' }));
    }
  }, [trelloToken, dispatch]);

  switch (status) {
    case REQUEST_STATUS.pending:
      return (
        <Box css={styles.root()}>
          <CircularProgress />
        </Box>
      );

    case REQUEST_STATUS.fulfilled:
      return (
        <Box css={styles.root()}>
          <Box css={styles.avatar()}>
            <Avatar
              hasImage={true}
              userName={fullName}
              src={`${avatarURL}/${AVATAR_SIZE}`}
            ></Avatar>
          </Box>
          <Box css={styles.info()}>
            <Typography css={styles.name()}>{fullName}</Typography>
            <Typography css={styles.board()}>
              Boards: {boardIDs.length}
            </Typography>
          </Box>
          <Box css={styles.description()}>
            <Typography css={styles.descriptionText()}>
              {hasDescription
                ? formattedDescription.map((el, index) => (
                    <Typography
                      css={styles.descriptionText()}
                      key={index.toString()}
                    >
                      {el}
                    </Typography>
                  ))
                : 'No description'}
            </Typography>
          </Box>
        </Box>
      );
    default:
      return null;
  }
};

export { Profile };
