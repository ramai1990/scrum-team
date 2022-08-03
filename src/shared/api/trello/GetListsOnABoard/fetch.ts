import { Response, ResponseError, QueryParameters } from './types';

const fetch = async ({
  boardID,
  token,
}: QueryParameters): Promise<Response | ResponseError> => {
  try {
    const response = await globalThis.fetch(
      `https://api.trello.com/1/boards/${boardID}/lists?fields=id&fields=name&key=${process.env.NEXT_PUBLIC_TRELLO_API_KEY}&token=${token}`,
      { method: 'GET' }
    );

    return response;
  } catch (error) {
    return <globalThis.Error>error;
  }
};

export { fetch };
