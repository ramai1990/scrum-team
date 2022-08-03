import { FC } from 'react';
import { useTheme } from '@mui/material';

import { Button as ButtonComponent } from 'src/shared/components';
import { useAppDispatch } from 'src/app/hooks';

import {
  createAuthPage,
  CreateAuthPageQueryParameters,
} from '../../../redux/api';
import { authorization } from '../../../redux/slice';
import { createStyles } from './AuthorizationButton.style';
import { LIFETIME_AUTHORIZATION } from './constants';

type Props = CreateAuthPageQueryParameters;

const AuthorizationButton: FC<Props> = (
  queryParameters: CreateAuthPageQueryParameters
) => {
  const theme = useTheme();
  const styles = createStyles({}, theme);
  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    const authPage = createAuthPage(queryParameters);

    const getToken = setInterval(() => {
      try {
        const hash = authPage?.location.hash;
        const tokenURL = hash?.slice(7, hash?.length);
        const isShouldDispatch =
          !tokenURL?.includes('error') && tokenURL !== undefined;

        if (isShouldDispatch) {
          dispatch(authorization(tokenURL));
        }

        authPage?.close();
        clearInterval(getToken);
      } catch (e) {
        if (authPage?.closed) clearInterval(getToken);
      }
    }, 1000);

    setTimeout(() => {
      clearInterval(getToken);
      authPage?.close();
    }, LIFETIME_AUTHORIZATION);
  };

  return (
    <ButtonComponent
      css={styles.root()}
      variant="contained"
      onClick={handleButtonClick}
    >
      authorization
    </ButtonComponent>
  );
};

export type { Props };

export { AuthorizationButton };
