import { FC, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { getGoogleAPI } from 'src/shared/api/google';
import { CircularProgress, Typography } from 'src/shared/components';
import { REQUEST_STATUS } from 'src/shared/helpers/redux';

import { getInfoAboutMe, selectProfile } from './redux/slice';
import { UserInfo } from './view/components';

type Props = {
  gapi: ReturnType<typeof getGoogleAPI>;
};

const GoogleProfile: FC<Props> = ({ gapi }) => {
  const {
    status,
    fullName,
    avatarURL,
    dateOfBirth,
    email,
    phoneNumber,
    error,
  } = useAppSelector(selectProfile);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getInfoAboutMe(gapi));
  }, [dispatch, gapi]);

  switch (status) {
    case REQUEST_STATUS.idle:
    case REQUEST_STATUS.pending:
      return <CircularProgress />;
    case REQUEST_STATUS.fulfilled:
      return (
        <UserInfo
          fullName={fullName}
          avatarURL={avatarURL}
          dateOfBirth={dateOfBirth}
          email={email}
          phoneNumber={phoneNumber}
        />
      );
    default:
      return <Typography>{error}</Typography>;
  }
};

export { GoogleProfile };
