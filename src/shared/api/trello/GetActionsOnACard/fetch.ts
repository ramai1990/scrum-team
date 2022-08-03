import type { QueryParameters, Response } from './types';

const fetch = async (
  queryParameters: QueryParameters
): Promise<Response | globalThis.Error> => {
  try {
    const { id, ...theRest } = queryParameters;

    const response = await globalThis.fetch(
      `https://api.trello.com/1/cards/${id}/actions?key=${
        process.env.NEXT_PUBLIC_TRELLO_API_KEY
      }&${Object.entries(theRest).reduce(
        (acc, [key, value]) => `${acc}&${key}=${value}`,
        ''
      )}`,
      { method: 'GET' }
    );

    const data = await response.json();

    return data;
  } catch (error) {
    return <globalThis.Error>error;
  }
};

export { fetch };
