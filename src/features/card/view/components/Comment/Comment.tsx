import { FC } from 'react';
import { useTheme } from '@mui/material';

import { Avatar, Box, Typography } from 'src/shared/components';

import { FormattedText } from '../FormattedText/FormattedText';
import { createStyles } from './Comment.style';

type Props = {
  name: string;
  commentText: string;
  date: string;
  avatarURL: string | undefined;
};

const Comment: FC<Props> = ({
  name = 'User Name',
  commentText,
  date,
  avatarURL,
}: Props) => {
  const theme = useTheme();
  const styles = createStyles({}, theme);

  const hasComment = Boolean(commentText.trim());

  return (
    <Box css={styles.root}>
      <Box css={styles.profileBox}>
        <Avatar
          css={styles.avatar}
          hasImage
          hasBorder={false}
          userName={name}
          src={avatarURL}
        ></Avatar>
        <Typography css={styles.name}>{name}</Typography>
      </Box>
      <Box css={styles.commentBox}>
        {hasComment && (
          <FormattedText
            content={commentText}
            textStyles={styles.text}
            linkStyles={styles.link}
          />
        )}
        <Typography css={styles.date}>{date}</Typography>
      </Box>
    </Box>
  );
};

export type { Props };

export { Comment };
