import { QueryParameters, Response } from './types';

const fetch = async ({
  token,
  boardID,
  name,
  pos = 'bottom',
}: QueryParameters): Promise<Response | globalThis.Error> => {
  try {
    const response = await globalThis.fetch(
      `https://api.trello.com/1/boards/${boardID}/lists?key=${process.env.NEXT_PUBLIC_TRELLO_API_KEY}&token=${token}&name=${name}&pos=${pos}`,
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
