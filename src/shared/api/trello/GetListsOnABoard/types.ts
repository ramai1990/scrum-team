import { Action } from 'redux';

type QueryParameters = {
  boardID: string;
  token: string;
};

type Response = Partial<{
  id: string;
  name: string;
  message: string;
}>;

type ResponseError = Partial<
  Action & {
    message: string;
  }
>;

export type { Response, ResponseError, QueryParameters };
