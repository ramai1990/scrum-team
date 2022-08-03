import { Response } from './types';

const fetch = async (token: string): Promise<Response | globalThis.Error> => {
  try {
    const response: globalThis.Response = await globalThis.fetch(
      `https://api.trello.com/1/members/me/boards?fields=id&fields=name&fields=desc&fields=memberships&fields=prefs&key=${process.env.NEXT_PUBLIC_TRELLO_API_KEY}&token=${token}`
    );

    return await response.json();
  } catch (error) {
    return <globalThis.Error>error;
  }
};

export { fetch };
