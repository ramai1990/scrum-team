import { ErrorResponse } from './types';

const isErrorResponse = (error: unknown): error is ErrorResponse => {
  return (
    error instanceof globalThis.Object &&
    (error as ErrorResponse)?.result?.error !== undefined
  );
};

export { isErrorResponse };
