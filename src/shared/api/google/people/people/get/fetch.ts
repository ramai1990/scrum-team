import { getGoogleAPI } from '../../../getGoogleAPI';
import { isErrorResponse } from '../../../predicates';
import { Response, Parameters } from './types';

const fetch = async (
  parameters: Parameters,
  lib: ReturnType<typeof getGoogleAPI>
): Promise<Response | globalThis.Error> => {
  try {
    if (lib === undefined) throw new Error('api undefined');

    const response = await lib.client.people.people.get(parameters);

    return response;
  } catch (error) {
    if (isErrorResponse(error)) {
      return new Error(error.result.error?.message);
    }

    if (error instanceof globalThis.Error) {
      return error;
    }

    return new Error('unknown error');
  }
};

export { fetch };
