import type { QueryParameters } from './types';

const fetch = async (queryParameters: QueryParameters) => {
  try {
    const response = await globalThis.fetch(
      `https://api.trello.com/1/members/${queryParameters.id}/?key=${
        process.env.NEXT_PUBLIC_TRELLO_API_KEY
      }&${Object.entries(queryParameters).reduce(
        (acc, [key, value]) => `${acc}&${key}=${value}`,
        ''
      )}`
    );
    const data = await response.json();

    return data;
  } catch (error) {
    return <globalThis.Error>error;
  }
};

export { fetch };
