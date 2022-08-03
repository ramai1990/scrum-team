import { QueryParameters, Response } from './types';

const fetch = async (
  queryParameters: QueryParameters
): Promise<Response | globalThis.Error> => {
  try {
    const response = await globalThis.fetch(
      `https://api.trello.com/1/cards?key=${
        process.env.NEXT_PUBLIC_TRELLO_API_KEY
      }&${Object.entries(queryParameters).reduce(
        (acc, [key, value]) => `${acc}&${key}=${value}`,
        ''
      )}`,
      { method: 'POST' }
    );

    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    return <globalThis.Error>error;
  }
};

export { fetch };
