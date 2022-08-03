import type { QueryParameters, Response } from './types';

const fetch = async (
  queryParameters: QueryParameters
): Promise<Response | globalThis.Error> => {
  try {
    const response = await globalThis.fetch(
      `https://api.trello.com/1/boards/?key=${
        process.env.NEXT_PUBLIC_TRELLO_API_KEY
      }&${Object.entries(queryParameters).reduce(
        (acc, [key, value]) => `${acc}&${key}=${value}`,
        ''
      )}`,
      { method: 'POST' }
    );

    const data = await response.json();

    if (data.message !== undefined) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    return <globalThis.Error>error;
  }
};

export { fetch };
