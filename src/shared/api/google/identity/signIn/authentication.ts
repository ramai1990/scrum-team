import { getGoogleAPI } from '../../getGoogleAPI';
import { Error as SignInError } from './types';

// https://developers.google.com/identity/sign-in/web/reference#authentication

const getAuthInstance = (lib: ReturnType<typeof getGoogleAPI>) => {
  return lib?.auth2?.getAuthInstance();
};

const signIn = async (lib: ReturnType<typeof getGoogleAPI>) => {
  try {
    const GoogleAuth = getAuthInstance(lib);
    const response = await GoogleAuth?.signIn();

    return response;
  } catch (error) {
    const isSignInError =
      error instanceof globalThis.Object &&
      (error as SignInError).error !== undefined;

    if (isSignInError) {
      return new Error((error as SignInError).error);
    }

    if (error instanceof globalThis.Error) {
      return error;
    }

    return new Error('unknown error');
  }
};

const isSignedIn = (lib: ReturnType<typeof getGoogleAPI>) => {
  const GoogleAuth = getAuthInstance(lib);

  return Boolean(GoogleAuth?.isSignedIn.get());
};

export { signIn, isSignedIn };
