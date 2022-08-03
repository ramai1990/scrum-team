import { isErrorResponse } from '../../../../predicates';
import { QueryParameters, Response } from './types';

const fetch = async (
  queryParameters: QueryParameters,
  lib: typeof window.gapi
): Promise<Response | globalThis.Error> => {
  try {
    const response = await lib.client.sheets.spreadsheets.values.get(
      queryParameters
    );

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
