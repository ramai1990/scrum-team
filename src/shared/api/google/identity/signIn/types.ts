// https://developers.google.com/identity/sign-in/web/reference#error_codes_2

type Error = {
  error: 'popup_closed_by_user' | 'access_denied' | 'immediate_failed';
};

export type { Error };
