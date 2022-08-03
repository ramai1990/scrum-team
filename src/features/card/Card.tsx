import { FC, useEffect } from 'react';
import { useTheme } from '@mui/material';
import moment from 'moment';

import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import {
  LinearProgress,
  Avatar,
  Box,
  Link,
  Typography,
  Alert,
} from 'src/shared/components';
import { REQUEST_STATUS } from 'src/shared/helpers/redux';
import { labelColors } from 'src/shared/api/trello/constants';

import { TrelloButton, CardDescription, Tag, Comment } from './view/components';
import { selectStatus, selectData, selectError, getData } from './redux/slice';
import { avatarType } from './constants';
import { createStyles } from './Card.style';

type Props = {
  trelloToken: string;
  cardID: string;
  boardName: string;
  href: string;
  onRejected?: (message: string) => void;
};

const Card: FC<Props> = ({
  trelloToken,
  cardID,
  boardName,
  href,
  onRejected,
}) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      getData({
        trelloToken,
        cardID,
      })
    );
  }, [dispatch, trelloToken, cardID]);

  const status = useAppSelector(selectStatus);
  const data = useAppSelector(selectData);
  const error = useAppSelector(selectError);

  switch (status) {
    case REQUEST_STATUS.idle: {
      return <LinearProgress position="fixed-top" />;
    }
    case REQUEST_STATUS.pending: {
      return <LinearProgress position="fixed-top" />;
    }
    case REQUEST_STATUS.fulfilled: {
      if (data === null) {
        onRejected?.(error ?? '');

        return null;
      }

      const { dateLastActivity, desc, url, labels, members, comments } = data;
      const hasDescription = Boolean(desc.trim());

      return (
        <Box css={styles.root}>
          <Link css={styles.title} href={href}>
            {boardName}
          </Link>
          <Box css={styles.firstRow}>
            <Box css={styles.member}>
              <Typography css={styles.memberText} component="h3">
                Members:
              </Typography>
              <Box css={styles.avatar}>
                {members.map(({ id, fullName, avatarUrl }) => (
                  <Avatar
                    key={id}
                    userName={fullName}
                    hasBorder={false}
                    src={`${avatarUrl}/${avatarType}`}
                    hasImage
                  />
                ))}
              </Box>
            </Box>
            <Box css={styles.TrelloButton}>
              <TrelloButton href={url} />
            </Box>
          </Box>
          <Typography css={styles.descriptionHeading} component="h3">
            Description:
          </Typography>
          <Box css={styles.description}>
            {hasDescription && <CardDescription text={desc} />}
          </Box>
          <Box css={styles.tags}>
            {labels.map(({ id, color: colorName, name: labelName }) => (
              <Tag
                key={id}
                color={labelColors[colorName]}
                text={labelName}
              ></Tag>
            ))}
          </Box>
          <Box css={styles.data}>
            <Typography css={styles.dataHeading} component="h3">
              Last activity:
            </Typography>
            <Typography css={styles.dataText}>
              {new Date(dateLastActivity)
                .toLocaleString('ru', { hour12: false })
                .slice(0, -3)}
            </Typography>
          </Box>
          <Typography css={styles.commentsHeading} component="h3">
            Comments:
          </Typography>
          <Box css={styles.commentsBox}>
            {comments.map(({ id, date, data: commentData, memberCreator }) => (
              <Comment
                key={id}
                name={memberCreator.fullName}
                commentText={commentData.text}
                date={moment(date).fromNow()}
                avatarURL={`${memberCreator.avatarUrl}/${avatarType}`}
              />
            ))}
          </Box>
        </Box>
      );
    }
    case REQUEST_STATUS.rejected: {
      onRejected?.(error ?? '');

      return <Alert severity="error">{error}</Alert>;
    }
    default: {
      return null;
    }
  }
};

export { Card };
