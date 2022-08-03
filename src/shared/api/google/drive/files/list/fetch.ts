import { isErrorResponse } from '../../../predicates';

const fetch = async (
  queryParameters: Parameters<typeof window.gapi.client.drive.files.list>['0'],
  lib: typeof window.gapi
): Promise<
  ReturnType<typeof window.gapi.client.drive.files.list> | globalThis.Error
> => {
  try {
    const response = await lib.client.drive.files.list(queryParameters);

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
